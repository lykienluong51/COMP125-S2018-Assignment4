let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('content/index', {
        title: 'Express Portfolio'
    });
});


/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('content/about', {
        title: 'About Express',
        author: 'Kien Luong Ly'
    });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('content/contact', {
        title: 'Contact Me',
        authors: ['Kien Luong Ly']
    });
});

module.exports = router;
