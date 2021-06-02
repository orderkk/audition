
const express = require('express')
const app = express()

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})

app.get('/lists', (req, res, next) => {
    res.send('hello, world~')
})

app.post('/lists', (req, res) => {
    console.log(req)
    res.send('post')
})

app.listen(3007)