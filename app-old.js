///HTTP es una libreria que nos permite crear rapido un webserver
const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });

        let salida = {
            nombre: 'fernando',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end(); // se ocupa para decirle al servidor que hemos terminado de escribir la respuesta
    })
    .listen(8080);
console.log(`Escuchando el puerdo 8080`);