const express = require('express')
const app = express()
const cors = require('cors')
const { add } = require("./arithmetica")
app.use(cors())

const port = 3002;

app.get('/', (req, res) => {
    res.send('Arithmetic Service - Hello World ');
});
// app.get('/add/:n/:m', (req, res) => {

//     res.json(Number(req.params.n) + Number(req.params.m));
// });

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum  = add(n,m);
        res.json(sum);
});

app.get('/sub/:n/:m', (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.listen(port);



