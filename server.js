const express = require("express")
const bodyParser = require("body-parser")
const socketio = require("socket.io")

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html")
})

// listen for requests :)
const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + 3000)
})

var io = socketio(listener)

io.on("connection",function(socket){
    console.log("made socket connection")
  
    socket.emit("log", {createdAt: new Date().getTime(), body: "Welcome, the logs stack up here"})
})

app.post("/", (request, response) => {
  console.log(request.body)
  io.emit("log",{createdAt: new Date().getTime(), body: request.body} )
  response.json()
})