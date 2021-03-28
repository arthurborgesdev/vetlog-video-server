const express = require("express")
const app = express()
const port = 8080


app.post('/', function(req, res) {
  console.log("Received!");
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})