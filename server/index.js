const express = require('express') // je peux appeler express parce que je l'ai installé dans les dépendances
const app = express()
const port = 3000

app.use('/',function (req, res) {
  res.status(200).send('index')
});

app.use('*',function (req, res) {
    res.status(404).send("Error 404, Sorry")
  });

 

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Go to http://localhost:${port}!`))