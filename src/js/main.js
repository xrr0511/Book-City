require.config({
    baseUrl: "/js/",
    paths: {
        //库文件
        "jquery": "./libs/jquery-2.1.1.min",
        "handlebars": "./libs/handlebars-v4.0.11",
        "page": "./libs/page",
        "swiper": "./libs/swiper",
        "bscroll": "./libs/bscroll",
        "text": "./libs/text",

        //路由
        "router": "./router/index",
        "routerConfig": "./router/router-config",
        "get": "./common/get",
        "render": "./common/render",

        //模板
        "listTpl": "../view/tpl/list-tpl.html",
        "bookcity": "./view/bookCity",
        "detail": "./view/detail"

    }
})

require(['router'])