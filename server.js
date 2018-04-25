const _express = require('express')

var app = _express()

app.get('/', (req, resp) => {
    resp.send({
        nome : 'Robson',
        likes : [
            'Moto',
            'Comida',
            
        ]
    })
})

app.get('/about', (req, resp) => {
    resp.send('About Page')
})




app.listen(1986)
