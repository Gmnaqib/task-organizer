const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About', (req, res) => {
    res.send('About Page')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})