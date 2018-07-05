const WebSocket = require('ws')
let fs = require('fs')
let jsonData = fs.readFileSync('./components/jsonRequest.json', 'utf8')

let socket;

function handleMessage(data) {
    console.log(data)
}

function setupListener() {

    socket.send(jsonData)

    socket.on('message', handleMessage)

}

function init(channel) {

    socket = new WebSocket(channel);

    socket.onopen = () => {
        setupListener()
    };
}

module.exports = init