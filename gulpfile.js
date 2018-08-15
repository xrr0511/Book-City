let gulp = require('gulp');
let server = require('gulp-webserver');
let fs = require('fs');
let path = require('path');
let url = require('url');
let scss = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let mock = require('./mock');
//起服务
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;

                if (pathname === '/favicon.ico') {
                    res.end('');
                    return false;
                }


                if (/^\/api/.test(pathname)) {
                    res.end(JSON.stringify({ code: 1, data: mock(req.url) }))
                } else {
                    pathname = /\.js|\.css|\.html$/.test(pathname) ? pathname : 'index.html';
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})

//开发环境 ---- css
gulp.task('devCss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android>=4.0']
        }))
        .pipe(gulp.dest('./src/css'))
})

//开发环境 ---- 监听 css
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('devCss'))
})

gulp.task('dev', gulp.series('devCss', 'server', 'watch'))