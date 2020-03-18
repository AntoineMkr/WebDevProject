const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/api/version', function getVersion(req,res){
    res.send('0.0.2')
})

app.listen(
    port, () => console.log(`Listening! Goto http://localhost:${port}`)
    )