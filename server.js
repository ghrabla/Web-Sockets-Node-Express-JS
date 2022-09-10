const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = socketio(server)
// git project path to run in static server
app.use(express.static(path.join(__dirname,'public')))

io.on('connection', socket => {
    console.log('new ws connection ...')
})

const PORT = 3000 || process.env.PORT;
server.listen(PORT,() => console.log(`server is running in port ${PORT}`))