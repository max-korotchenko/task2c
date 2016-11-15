import express from 'express'
import cors from 'cors'

import canonize from './canonize'

const app = express()
let result = [];
app.use(cors());
app.get('/task2c', function (req, res) {
  const username = req.query.username || '';
  res.send(canonize(username));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})