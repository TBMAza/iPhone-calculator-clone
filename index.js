const Display = document.getElementById(`calcDisp`);

const ZERO = document.getElementById(`btn0`);
const ONE = document.getElementById(`btn1`);
const TWO = document.getElementById(`btn2`);
const THREE = document.getElementById(`btn3`);
const FOUR = document.getElementById(`btn4`);
const FIVE = document.getElementById(`btn5`);
const SIX = document.getElementById(`btn6`);
const SEVEN = document.getElementById(`btn7`);
const EIGHT = document.getElementById(`btn8`);
const NINE = document.getElementById(`btn9`);
const DECIMAL = document.getElementById(`decBtn`);

const Plus = document.getElementById(`pluBtn`);
const Minus = document.getElementById(`minBtn`);
const Multiply = document.getElementById(`mulBtn`);
const Divide = document.getElementById(`divBtn`);
const Equals = document.getElementById(`equBtn`);

const AllClear = document.getElementById(`acBtn`);
const ChangeSign = document.getElementById(`signBtn`);
const PercentOf = document.getElementById(`percBtn`);

let numberBuffer = 0;
let firstOperandBuffer = null;
let secondOperandBuffer = null;

let operationBuffer = null;
let operationInit = false;

AllClear.onclick = function() {
    Display.textContent = `0`;
    numberBuffer = 0;
    firstOperandBuffer = null;
    secondOperandBuffer = null;
    operationBuffer = null;
}

ChangeSign.onclick = function() {
    if(operationInit) {
        Display.textContent = 0;
    }
    else {
        if(Display.textContent !== `0` && Display.textContent.charAt(0) != `-`) {
            Display.textContent = `-` + Display.textContent;
        }
        else {
            Display.textContent = Display.textContent.replaceAll(`-`, ``);
        }
    }
}

PercentOf.onclick = function() {
    if(!firstOperandBuffer) {
        firstOperandBuffer = Number(Display.textContent);
        
        firstOperandBuffer /= 100;
        firstOperandBuffer = firstOperandBuffer.toFixed(5);
        firstOperandBuffer = parseFloat(firstOperandBuffer);
        
        Display.textContent = String(firstOperandBuffer);
        firstOperandBuffer = null;
    }
    else {
        secondOperandBuffer = Number(Display.textContent);
        secondOperandBuffer = (secondOperandBuffer/100) * firstOperandBuffer;
        secondOperandBuffer = secondOperandBuffer.toFixed(5);
        secondOperandBuffer = parseFloat(secondOperandBuffer);
        Display.textContent = String(secondOperandBuffer);
    }
}

Plus.onclick = function() {
    if(!firstOperandBuffer) {
        firstOperandBuffer = Number(Display.textContent);
        operationBuffer = `+`;
        operationInit = true;
    }
    else {
        secondOperandBuffer = Number(Display.textContent);

        switch(operationBuffer) {
            case `+`:
                firstOperandBuffer += secondOperandBuffer;
            break;
            case `-`:
                firstOperandBuffer -= secondOperandBuffer;
            break;
            case `*`:
                firstOperandBuffer *= secondOperandBuffer;
            break;
            case `/`:
                firstOperandBuffer /= secondOperandBuffer;
            break;
        }
        
        firstOperandBuffer = firstOperandBuffer.toFixed(5);
        firstOperandBuffer = parseFloat(firstOperandBuffer);
        Display.textContent = String(firstOperandBuffer);
        
        secondOperandBuffer = null;
        operationBuffer = `+`;
        operationInit = true;
    }
}
Minus.onclick = function() {
    if(!firstOperandBuffer) {
        firstOperandBuffer = Number(Display.textContent);
        operationBuffer = `-`;
        operationInit = true;
    }
    else {
        secondOperandBuffer = Number(Display.textContent);

        switch(operationBuffer) {
            case `+`:
                firstOperandBuffer += secondOperandBuffer;
            break;
            case `-`:
                firstOperandBuffer -= secondOperandBuffer;
            break;
            case `*`:
                firstOperandBuffer *= secondOperandBuffer;
            break;
            case `/`:
                firstOperandBuffer /= secondOperandBuffer;
            break;
        }
        
        firstOperandBuffer = firstOperandBuffer.toFixed(5);
        firstOperandBuffer = parseFloat(firstOperandBuffer);
        Display.textContent = String(firstOperandBuffer);
        
        secondOperandBuffer = null;
        operationBuffer = `-`;
        operationInit = true;
    }
}
Multiply.onclick = function() {
    if(!firstOperandBuffer) {
        firstOperandBuffer = Number(Display.textContent);
        operationBuffer = `*`;
        operationInit = true;
    }
    else {
        secondOperandBuffer = Number(Display.textContent);

        switch(operationBuffer) {
            case `+`:
                firstOperandBuffer += secondOperandBuffer;
            break;
            case `-`:
                firstOperandBuffer -= secondOperandBuffer;
            break;
            case `*`:
                firstOperandBuffer *= secondOperandBuffer;
            break;
            case `/`:
                firstOperandBuffer /= secondOperandBuffer;
            break;
        }
        
        firstOperandBuffer = firstOperandBuffer.toFixed(5);
        firstOperandBuffer = parseFloat(firstOperandBuffer);
        Display.textContent = String(firstOperandBuffer);
        
        secondOperandBuffer = null;
        operationBuffer = `*`;
        operationInit = true;
    }
}
Divide.onclick = function() {
    if(!firstOperandBuffer) {
        firstOperandBuffer = Number(Display.textContent);
        operationBuffer = `/`;
        operationInit = true;
    }
    else {
        secondOperandBuffer = Number(Display.textContent);
        
        switch(operationBuffer) {
            case `+`:
                firstOperandBuffer += secondOperandBuffer;
            break;
            case `-`:
                firstOperandBuffer -= secondOperandBuffer;
            break;
            case `*`:
                firstOperandBuffer *= secondOperandBuffer;
            break;
            case `/`:
                firstOperandBuffer /= secondOperandBuffer;
            break;
        }

        firstOperandBuffer = firstOperandBuffer.toFixed(5);
        firstOperandBuffer = parseFloat(firstOperandBuffer);
        Display.textContent = String(firstOperandBuffer);
       
        secondOperandBuffer = null;
        operationBuffer = `/`;
        operationInit = true;
    }
}

Equals.onclick = function() {
    secondOperandBuffer = Number(Display.textContent);
    console.log(firstOperandBuffer);
    console.log(secondOperandBuffer);
    console.log(operationBuffer);
    switch(operationBuffer) {
        case `+`:
            firstOperandBuffer += secondOperandBuffer;
        break;
        case `-`:
            firstOperandBuffer -= secondOperandBuffer;
        break;
        case `*`:
            firstOperandBuffer *= secondOperandBuffer;
        break;
        case `/`:
            firstOperandBuffer /= secondOperandBuffer;
        break;
    }
    firstOperandBuffer = firstOperandBuffer.toFixed(5);
    firstOperandBuffer = parseFloat(firstOperandBuffer);
    Display.textContent = String(firstOperandBuffer);
    
    operationBuffer = null;
    firstOperandBuffer = null;
    secondOperandBuffer = null;
}

DECIMAL.onclick = function() {
    if(operationInit) {
        Display.textContent = `0.`;
        operationInit = false;
    }
    if(Display.textContent.indexOf(`.`) === -1) {
        Display.textContent += `.`;
    }
}

ZERO.onclick = function() {
    if(operationInit) {
        Display.textContent = `0`;
        operationInit = false;
    }
    else {
        if(Display.textContent !== `0` && Display.textContent.length < 7) {
            Display.textContent += `0`;
        }
    }
}
ONE.onclick = function() {
    if(operationInit) {
        Display.textContent = `1`;
        operationInit = false;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `1`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `1`;
        }
    }
}
TWO.onclick = function() {
    if(operationInit) {
        Display.textContent = `2`;
        operationInit = false;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `2`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `2`;
        }
    }
}
THREE.onclick = function() {
    if(operationInit) {
        Display.textContent = `3`;
        operationInit = false;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `3`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `3`;
        }
    }
}
FOUR.onclick = function() {
    if(operationInit) {
        Display.textContent = `4`;
        operationInit = false;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `4`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `4`;
        }
    }
}
FIVE.onclick = function() {
    if(operationInit) {
        Display.textContent = `5`;
        operationInit = false;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `5`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `5`;
        }
    }
}
SIX.onclick = function() {
    if(operationInit) {
        Display.textContent = `6`;
        operationInit = false;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `6`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `6`;
        }
    }
}
SEVEN.onclick = function() {
    if(operationInit) {
        Display.textContent = `7`;
        operationInit = false;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `7`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `7`;
        }
    }
}
EIGHT.onclick = function() {
    if(operationInit) {
        Display.textContent = `8`;
        operationInit = false;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `8`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `8`;
        }
    }
}
NINE.onclick = function() {
    if(operationInit) {
        Display.textContent = `9`;
        operationInit = null;
    }
    else {
        if(Display.textContent === `0`){
            Display.textContent = `9`;
        }
        else if(Display.textContent.length < 7) {
            Display.textContent += `9`;
        }
    }
}