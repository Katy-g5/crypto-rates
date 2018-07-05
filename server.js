const app = require('./app');
const http = require('http');

let port = 8080;

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function onError(error) {
	console.log(error)
}


function onListening() {
	console.log(`Server is running`)
}

const sio = require('./components/socketioWrapper');
const sioServerWrapper = sio( "wss://ws-feed.gdax.com")

module.exports = server;