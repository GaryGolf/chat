const express = require('express')
const http = require('http')
const bodyParser =require('body-parser')
const socketIO =  require('socket.io')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig  = require('./webpack.config.js')

const app = express();
const server = http.createServer(app)
const io = socketIO(server)
app.use(express.static(__dirname + '/public'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({extended: false}))

server.listen(3000, () => console.log('Server is running on port 3000;'))