const express = require('express')
const messageCtrl = require('./controllers/messagesController')

const app = express()
app.use(express.json())


// const messagesUrl = '/api/messages'
app.post('/api/messages', messageCtrl.create)
app.get('/api/messages', messageCtrl.read)
app.put('/api/messages/:id', messageCtrl.update)
app.delete('/api/messages/:id', messageCtrl.delete)




const SERVER_PORT = 3001
app.listen(SERVER_PORT, () => {console.log(`Server running on port ${SERVER_PORT}`)})