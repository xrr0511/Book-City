define(['handlebars', 'jquery'], function(handlebars, $) {
    let render = (tpl, data, target) => {
        let template = handlebars.compile(tpl);

        let html = template(data);

        $(target).html(html)
    };
    return render;
})