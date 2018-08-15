define(['render', 'text!listTpl', 'get', 'bscroll'], (render, listTpl, get, bscroll) => {
    let init = (ops) => {
        get(ops.api).then((res) => {
            let data = JSON.parse(res);
            if (data.code === 1) {
                console.log(data)
                render(listTpl, data.data, '.city');
            }
        }).catch((error) => {
            console.warn(error)
        })

        // 实例 bscroll
        let _scrollCon = $('.inner-con')

        let wrapScroll = new bscroll('.con', {
            probeType: 2,
            click: true
        })

        let htmlFz = $('html').css('fontSize');

        let ruleFz = parseInt(htmlFz) * 44 / 37.5;

        wrapScroll.on('scroll', function() {
            if (this.y < this.maxScrollY - ruleFz) {
                _scrollCon.attr('up', "释放加载更多")
            } else if (this.y < this.maxScrollY - ruleFz / 2) {
                _scrollCon.attr('up', "上拉加载")
            } else if (this.y > ruleFz) {
                _scrollCon.attr('down', "释放刷新")
            }
        })

        wrapScroll.on('touchEnd', function() {
            if (_scrollCon.attr('up') === '释放加载更多') {
                console.log('loadmore')
            } else if (_scrollCon.attr('down') === '释放刷新') {
                console.log('refresh')
                    // window.reload()
            }
        })
    };

    return init;
})