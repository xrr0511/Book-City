define(['get'], (get) => {
    let routerObj = {};

    routerObj.start = (ctx, next) => {
        ctx.data = {};
        next();
    };

    routerObj.bookCity = (ctx, next) => {
        Promise.all([get('/view/index.html'), get('/view/bookCity.html')])
            .then((result) => { //[result1,result2]
                document.querySelector('.wrap').innerHTML = result[0];
                document.querySelector('.con-wrap').innerHTML = result[1];

                ctx.data.script = 'bookcity';
                ctx.data.api = '/api/list';


                next()
            }).catch((error) => {
                console.warn(error)

            })
    }

    routerObj.bookShelf = () => {
        Promise.all([get('/view/index.html'), get('/view/bookShelf.html')])
            .then((result) => {
                document.querySelector('.wrap').innerHTML = result[0];
                document.querySelector('.index-con').innerHTML = result[1];

            }).catch((error) => {
                console.warn(error)

            })
    }

    routerObj.detail = (ctx, next) => {
        get('/view/detail.html')
            .then((html) => {
                document.querySelector('.wrap').innerHTML = html;
                ctx.data.script = 'detail';
                next()
            })
            .catch((error) => {
                console.warn(error)
            })
    }

    routerObj.notFound = () => {
        get('/view/not-found.html')
            .then((html) => {
                document.querySelector('.wrap').innerHTML = html;
            })
            .catch((error) => {
                console.warn(error)
            })
    }

    routerObj.render = (ctx) => {
        require([ctx.data.script], (cb) => {
            cb(ctx.data)
        })
    }

    return routerObj;
})