const express = require("express");
const app = express();
// var router = express.Router();

require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

// const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  console.log("Doing a GET to /");
  res.send('Hello World!');
});

app.post("/send_mail", cors(), async (req, res) => {
  // console.log('Doing a POST send_mail')
  let { text } = req.body
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  console.log('Created the transport')


  // await transport.sendMail({
  //   from: process.env.MAIL_FROM,
  //   to: "peter.waller53@gmail.com",
  //   subject: "New contact for Nephesh Coaching!",
  //   // text: { text },
  //   html: `<div><h3>HTML version</h3><p>${text}</p></div>`
  // })

  console.log('post completed: ')
  console.log(text)

});

// app.listen((process.env.PORT || 4000, () => {console.log("Server is listening on port 4000")}));
// app.listen((process.env.PORT, () => {console.log(`Server is listening on port: ${process.env.PORT}`)}));

var debug = require('debug')('backend:server');
var http = require('http');
var port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

// Create HTTP server
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

//  Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//  Event listener for HTTP server "listening" event.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log("The server is running on " + bind);
  debug('Listening on ' + bind);
}
