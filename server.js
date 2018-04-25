const _express = require('express')
const _hbs = require('hbs');


var app = _express()

_hbs.registerPartials(__dirname + '/views/partials')
_hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

_hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.set('view engine', 'hbs')
app.use(_express.static(__dirname + '/public'))

app.use((req, resp, next) => {

    var now = new Date().toString()
    console.log(req.method)
    console.log(req.url)
    console.log(now)

    next()

})

app.get('/', (req, resp) => {
    resp.render('home.hbs', {
        welcomeMessage: 'Welcome to some website',
        pageTitle: 'Home Page',
       
    })
})

app.get('/about', (req, resp) => {
    resp.render('about.hbs', {
        pageTitle: 'About Page',
      
    })
})




app.listen(2010, () => {
    console.log('Server is running on port 2010')
})
