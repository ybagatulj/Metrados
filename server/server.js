const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');

const publicPath = path.join(__dirname, '/../public/view');
const port = process.env.PORT || 8002
let app = express();
let server = http.createServer(app);
let io = socket(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("El nuevo usuario conectado");

    socket.on('disconnect', () => {
        console.log("Desconectado del servidor.");
    })
});

io.on('disconnect', () => {
    console.log("Usuario fue desconectado.");
})

server.listen(port, () => {
    console.log("Server is up on port " + port);
});