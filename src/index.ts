import express from 'express'
const connection = require('./connect')
const app = express()
const port = 3000

app.get('/', (_, res) => {
  //res.status(200).send()
  console.log("testing endpoint")
  res.send("hello")
})

app.listen(port, () => console.log(`Running on port ${port}`))