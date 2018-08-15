define(['jquery'], function($) {
    let cache = {};
    let get = (url) => {
        return new Promise((reslove, reject) => {

            if (cache[url]) {
                reslove(cache[url]);
                return;
            }

            $.ajax({
                url: url,
                dataTypeL: "text",
                success: (res) => {
                    cache[url] = res
                    reslove(res);
                },
                error: (error) => {
                    reject(error)
                }
            })
        })
    };
    return get;
})