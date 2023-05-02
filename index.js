const express = require('express');
const port = 5000;
const app = express();
const cors = require('cors');

app.use(cors());

const chefInfo = require('./data/chefinfo.json')
const chefAbout = require('./data/aboutchef.json')

app.get('/', (req, res) => {
  res.send('Type chefinfo after /')
})

app.get('/chefinfo', (req, res) => {
  res.send(chefInfo)
})

app.get('/chef-about', (req, res) => {
  res.send(chefAbout)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})