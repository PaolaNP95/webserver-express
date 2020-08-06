const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//configuracion para Heroku
//nos permitira acceso a unas variables d eentorno global
const port = process.env.PORT || 3000;

///Middleware un callback que se va a ejecutar siempre no importa en URL que el user pida

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//se debe de crear el archivo para visualizar la pagina y poner el nombre del ardchvio en la url
app.get('/', (req, res) => {

    //res.send(salida)
    res.render('home', {
        nombre: 'Fernando',
    })
})
app.get('/about', (req, res) => {

    //res.send(salida)
    res.render('about', {})
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})