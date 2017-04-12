module.exports = function(app) {
    app.get('/home', function(req, res) {
        res.render('index.html')
    });
    app.get('/about', function(req, res) {
        res.render('about.html');
    });

    app.get('/portfolio', function(req, res) {
        res.render('portfolio.html');
    });
    app.get('/journal', function(req, res) {
        res.render('journal.html');
    });

    app.get('/contact', function(req, res) {
        res.render('contact.html');
    });

}
