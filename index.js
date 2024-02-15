const express = require( 'express');
const app = express ();
const cors = require('cors');
const port = 3000;

app.get ('/',(req,res)=>{
    res. send ('Arithmetic service - Hello World! For addition, type /add/<Number1>/<Number2> in url');
});

app.get ('/add/:n/:m', (req, res) => {
res.json(Number(req.params.n) + Number(req.params.m));
res. send ('Arithmetic service - Hello World!');
}) ;

app. listen (port);


async function add() {
    const operand1Input = document.getElementById("operand1");
    const operand2Input = document.getElementById("operand1");
    let n = operand1Input.value;
    let m = operand2Input.value;
    const response = await fetch("https://arithmetic-service-new-ishaghaisas.onrender.com//add" + n + "/" + m);
    const sum = await response.json();
    document.getElementById("sum").innerText = sum;
}
