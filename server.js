const _express = require('express')
// const _hbs = require('hbs');

var app = _express()


app.set('view engine', 'hbs')
app.use(_express.static(__dirname + '/public'))

app.get('/', (req, resp) => {
    resp.render('home.hbs', {
        welcomeMessage: 'Welcome to some website',
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/about', (req, resp) => {
    resp.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})




app.listen(2010, () => {
    console.log('Server is running on port 2010' )
})
