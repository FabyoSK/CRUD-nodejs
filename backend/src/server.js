const express = require('express')
const { uuid } = require('uuidv4')
const cors = require('cors')

const app = express()

const users = []

app.use(express.json())
app.use(cors())


app.get('/users',  (req, res ) =>{
  return res.json(users)
})

app.post('/users', (req, res) => {
  const { name, age, sex, country, ocupation} = req.body
  const user = {id:uuid(), name, age, sex, country, ocupation}
  users.push(user)

  return res.json(user)
})

app.put('/users/:id', (req, res) => {
  const {id} = req.params
  const { name, age, sex, country, ocupation} = req.body
  const user = {id, name, age, sex, country, ocupation}

  const userIndex = users.findIndex(user => user.id === id)
  if(userIndex < 0){ return res.status(400).json({ERROR: "User not found."})}

  users[userIndex] = user

  return res.json(user)
})
app.delete('/users/:id', (req, res) => {
  const {id} = req.params

  const userIndex = users.findIndex(user => user.id === id)
  if(userIndex < 0){ return res.status(400).json({ERROR: "User not found."})}
  users.splice(userIndex, 1)

  return res.status(204).send()
})

app.listen(3333)