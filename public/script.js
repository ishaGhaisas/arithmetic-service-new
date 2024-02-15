async function add() {
    const operand1Input = document.getElementById("operand1");
    const operand2Input = document.getElementById("operand1");
    let n = operand1Input.value;
    let m = operand2Input.value;
    const response = await fetch("http://localhost:3000/add/" + n + "/" + m);
    const sum = await response.json();
    document.getElementById("sum").innerText = sum;
}