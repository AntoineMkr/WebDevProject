const express = require('express')
const app = express()
const port = 3000


app.use('*',function (req, res) {
    res.status(404).send("Sorry can't find that!")
  });

  app.use('test',function (req, res) {
    res.status(200).send("Embrasse moi")
  });