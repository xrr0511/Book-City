let listData = require('./data/list.json')

let resObj = {
    '/api/list': listData
}


module.exports = function(url) {
    return resObj[url]
}