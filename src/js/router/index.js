require(['page', 'routerConfig'], function(page, routerConfig) {
    page('*', routerConfig.start)
    page('/', '/index/bookCity') //把 '/' 指向 '/index/bookCity'
    page('/index/bookCity', routerConfig.bookCity);
    page('/index/bookShelf', routerConfig.bookShelf);
    page('/detail', routerConfig.detail)
    page('*', routerConfig.render)
    page() //注意
})