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

app.get('/chefinfo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const chef = chefInfo.find(c => parseInt(c.id) === id)
  res.send(chef);
})


app.get('/chef-about', (req, res) => {
  res.send(chefAbout)
})

app.get('/chef-about/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const singleChef = chefAbout.find(chef => parseInt(chef.id) === id);
  res.send(singleChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})