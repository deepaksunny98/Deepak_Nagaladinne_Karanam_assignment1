var home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

module.exports = {
    home
}