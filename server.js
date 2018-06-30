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

module.exports = server;