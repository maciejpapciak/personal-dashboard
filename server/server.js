const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
}) 


io.on("connection", (socket) => {
    console.log(`User Connected ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data)
    })
})


io.listen(4000)