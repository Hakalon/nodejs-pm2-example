const express = require('express')
const app = express()

function doSomething() {
  Array.from({ length: 100000 }).forEach(value => {
    return value * value * value
  })
}

app.get('/', (req, res) => {
  setTimeout(() => {
    doSomething()
    res.send('Hello World')
  }, 300)
  console.log(`root had been called.`)
})

app.listen(3000)