const express = require('express');
const port = 5000;
const app = express();

const chefInfo = require('./data/chefinfo.json')


app.get('/', (req, res) => {
  res.send('Type chefinfo after /')
})

app.get('/chefinfo', (req, res) => {
  res.send(chefInfo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})