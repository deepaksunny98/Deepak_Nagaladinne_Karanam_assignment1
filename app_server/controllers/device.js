const deviceList = [
    {
        name: 'OnePlus',
        version: '7t'
    },
    {
        name: 'Iphone',
        version: '11pro'
    },
    {
        name: 'Samsung',
        version: 's10'
    }
]


var device = function(req, res, next) {
    res.render('list-display', { title:'list', devices: deviceList });
}

module.exports = {
    device
}