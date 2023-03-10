class basicMath {
    constructor() {
        this.inputNumber = null,
        this.execOper = "",
        this.newNumber = true
    }

    validation() {
        return this.inputNumber;
    }

    addit() {
        this.execOper = "+";
    }

    subtraction() {
        this.execOper = "-";
    }

    multiplic() {
        this.execOper = "*";
    }

    divis() {
        this.execOper = "/";
    }

    reset() {
        this.inputNumber = null;
        this.execOper = "";
    }
}

const computation = new basicMath();

function addButton() {
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    if (computation.inputNumber === null) {
        computation.inputNumber = saveNumber;
    }
    else {
        switch (computation.execOper) {
            case '+':
                computation.inputNumber += saveNumber;
                break;
            case '-':
                computation.inputNumber -= saveNumber;
                break;
            case '*':
                computation.inputNumber *= saveNumber;
                break;
            case '/':
                computation.inputNumber /= saveNumber;
                break;
            default:
                break;
        }
    }
    computation.addit();
    endings(saveNumber)
}

function subtractButton() {
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    if (computation.inputNumber === null) {
        computation.inputNumber = saveNumber;
    }
    else {
        switch (computation.execOper) {
            case '+':
                computation.inputNumber += saveNumber;
                break;
            case '-':
                computation.inputNumber -= saveNumber;
                break;
            case '*':
                computation.inputNumber *= saveNumber;
                break;
            case '/':
                computation.inputNumber /= saveNumber;
                break;
            default:
                break;
        }
    }
    computation.subtraction();
    endings(saveNumber)
}

function multiplyButton() {
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    if (computation.inputNumber === null) {
        computation.inputNumber = saveNumber;
    }
    else {
        switch (computation.execOper) {
            case '+':
                computation.inputNumber += saveNumber;
                break;
            case '-':
                computation.inputNumber -= saveNumber;
                break;
            case '*':
                computation.inputNumber *= saveNumber;
                break;
            case '/':
                computation.inputNumber /= saveNumber;
                break;
            default:
                break;
        }
    }
    computation.multiplic();
    endings(saveNumber)
}

function divideButton() {
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    if (computation.inputNumber === null) {
        computation.inputNumber = saveNumber;
    }
    else {
        switch (computation.execOper) {
            case '+':
                computation.inputNumber += saveNumber;
                break;
            case '-':
                computation.inputNumber -= saveNumber;
                break;
            case '*':
                computation.inputNumber *= saveNumber;
                break;
            case '/':
                computation.inputNumber /= saveNumber;
                break;
            default:
                break;
        }
        console.log(computation)
    }
    computation.divis();
    endings(saveNumber)
}

function equalButton() {
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    switch (computation.execOper) {
        case '+':
            computation.inputNumber += saveNumber;
            break;
        case '-':
            computation.inputNumber -= saveNumber;
            break;
        case '*':
            computation.inputNumber *= saveNumber;
            break;
        case '/':
            computation.inputNumber /= saveNumber;
            break;
        default:
            break;
    }
    computation.execOper = ""
    endings(saveNumber)
}

function numberButtons(e) {
    let screenAdd = e.target.textContent;
    let screenOut = document.getElementById("screen");

    if (computation.newNumber === true) {
        screenOut.innerHTML = screenAdd;
        computation.newNumber = false;
    }
    else {
        screenOut.innerHTML += screenAdd;
    }
}

function decimalButton(e) {
    let screenOut = document.getElementById("screen");

    screenOut.innerHTML += ".";
    e.target.disabled = true;
}

function deleteButton() {
    let screenOut = document.getElementById("screen");
    let screenText = screenOut.textContent;

    if (screenText.charAt(screenText.length - 1) === ".") {
        document.getElementById("period").disabled = false;
    }

    screenOut.innerHTML = screenText.slice(0, -1);
}

function resetButton() {
    let screenOut = document.getElementById("screen");

    computation.reset();

    screenOut.innerHTML = "0"
    document.getElementById("period").disabled = false;
    document.getElementById("previousInput").innerHTML = "";
}

function endings(s) {
    computation.newNumber = true;
    roundNumber = parseFloat(computation.inputNumber.toFixed(2));
    document.getElementById("screen").innerHTML = roundNumber.toLocaleString();
    document.getElementById("period").disabled = false;
    document.getElementById("previousInput").innerHTML += `${s} ${computation.execOper}`
}