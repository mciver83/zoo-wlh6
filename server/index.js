const express = require('express')

const AnimalCtrl = require('./controllers/animals')

const app = express()
const port = 4000

app.use(express.json())


app.get('/api/animals', AnimalCtrl.read)
app.post('/api/animals', AnimalCtrl.create)
app.put('/api/animals/:id', AnimalCtrl.update)
app.delete('/api/animals/:id', AnimalCtrl.delete)

app.listen(port, () => {
  console.log('listening on port', port)
})