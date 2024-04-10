const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

const app = express()
const PORT = 8000

const db = new Array()

// Middlewarres
app.use(cors())
app.use(bodyParser.json())

// Routes
app.get('/todo', (req, res) => {
  const items = db
  return res.json({ status: 'success', data: items })
})

app.post('/todo/mark-complete', (req, res) => {
  const { id } = req.body
  const itemIndex = db.findIndex((e) => e.id === id)

  if (itemIndex === -1)
    return res.json({ status: 'error', error: 'Invalid ID' })

  db[itemIndex].isCompleted = true

  return res.json({ status: 'success' })
})

app.post('/todo/create', (req, res) => {
  console.log(`[Server]: Creating new todo!`)
  const { title } = req.body
  const id = uuidv4()
  const item = { id, title, isCompleted: false, createdAt: new Date() }
  db.push(item)

  return res.json({ status: 'success', data: item })
})

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))
