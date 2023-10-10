function calculateSum() {
    const inputA = parseFloat(document.getElementById("inputA").value) || 0;
    const inputB = parseFloat(document.getElementById("inputB").value) || 0;
    const sum = inputA + inputB;
    document.getElementById("sum").textContent = sum;
}
function calculateSub() {
    const inputC = parseFloat(document.getElementById("inputC").value) || 0;
    const inputD = parseFloat(document.getElementById("inputD").value) || 0;
    const sub = inputC - inputD;
    document.getElementById("sub").textContent = sub;
}
function calculateMul() {
    const inputE = parseFloat(document.getElementById("inputE").value) || 0;
    const inputF = parseFloat(document.getElementById("inputF").value) || 0;
    const mul = inputE * inputF;
    document.getElementById("mul").textContent = mul;
}
function calculatediv() {
    const inputG = parseFloat(document.getElementById("inputG").value) || 0;
    const inputH = parseFloat(document.getElementById("inputH").value) || 0;
    const div = inputG - inputH;
    document.getElementById("div").textContent = div;
}
function calculatemod() {
    const inputI = parseFloat(document.getElementById("inputI").value) || 0;
    const inputJ = parseFloat(document.getElementById("inputJ").value) || 0;
    const mod = inputI % inputJ;
    document.getElementById("mod").textContent = mod;
}
let inputIValue = 0;

function calculateinc() {
    inputIValue++ ; // Increment the value
    document.getElementById("inputl").value = inputIValue; // Update the input field
    document.getElementById("inc").textContent = inputIValue;
}

let inputkValue = 0;

function calculatedec() {
    inputkValue--; // Decrement the value
    document.getElementById("inputm").value = inputkValue; // Update the input field
    document.getElementById("dec").textContent = inputkValue; // Display the decremented value
}
function compareNumbers() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    if (number1 == number2) {
        document.getElementById("result").textContent = `The ${number1} == ${number2} equal`;
    } else {
        document.getElementById("result").textContent = `The ${number1} == ${number2} not equal`;
    }
}
function compare() {
    const number3 = parseFloat(document.getElementById("number3").value);
    const number4 = parseFloat(document.getElementById("number4").value);

    if (number3 != number4) {
        document.getElementById("new").textContent = `The ${number3} != ${number4}`;
    } else {
        document.getElementById("new").textContent = "The numbers are equal.";
    }
}

function compare1() {
    const number5 = parseFloat(document.getElementById("number5").value);
    const number6 = parseFloat(document.getElementById("number6").value);

    if (number5 > number6) {
        document.getElementById("new1").textContent = `The ${number5} > ${number6}`;
    } else {
        document.getElementById("new1").textContent = `The ${number5} < ${number6}`;
    }
}
function less() {
    const number7 = parseFloat(document.getElementById("number7").value);
    const number8 = parseFloat(document.getElementById("number8").value);

    if (number7 < number8) {
        document.getElementById("new2").textContent = `The  number ${number7} is <(less) than ${number8}`;
        alert('true');
    } else {
        document.getElementById("new2").textContent = `The  number ${number7} is >(greater) than ${number8}`;
alert('false');
    }
}

function great() {
    const number9 = parseFloat(document.getElementById("number9").value);
    const number10 = parseFloat(document.getElementById("number10").value);

    if (number9 >= number10) {
        document.getElementById("new3").textContent = `The ${number9} >= ${number10}`;
    } else {
        document.getElementById("new3").textContent = `The ${number9} <= ${number10}`;
    }
}
function lesser() {
    const num9 = parseFloat(document.getElementById('num9').value);
    const num1 = parseFloat(document.getElementById('num1').value);

    if (num9 <= num1) {
        document.getElementById('new4').textContent = `The ${num9} <= ${num1}`;
        
    } else {
        document.getElementById('new4').textContent = `The ${num9} >= ${num1}`;
    }
}