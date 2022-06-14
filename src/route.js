const express = require('express')
const res = require('express/lib/response')
const questionController = require('../src/views/controllers/QuestionController')
const RoomController = require('../src/views/controllers/RoomController')
const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))

route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

route.get('/room', (req, res) => res.render('room'))

route.post('/room/:room/:question/:action', questionController.index)
route.post('/room/create-room', RoomController.create)

module.exports = route
