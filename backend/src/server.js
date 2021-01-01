const express = require('express')

const app = express()

const users = []

app.use(express.json())


app.get('/users',  (req, res ) =>{
  return res.json(users)
})

app.post('/users', (req, res) => {
  const { name, age, sex, country, ocupation} = req.body
  const user = { name, age, sex, country, ocupation}
  users.push(user)

  return req.json(user)
})

app.put('/users/:id', (req, res) => {
  
})

app.listen(3333)