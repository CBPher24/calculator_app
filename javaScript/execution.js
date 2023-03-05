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
    console.log(computation);
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    if (computation.inputNumber === null) {
        console.log("starting")
        computation.inputNumber = saveNumber;
    }
    else {
        console.log("adding")
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
    computation.addit();
    endings()
}

function subtractButton() {
    console.log(computation);
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    if (computation.inputNumber === null) {
        console.log("starting")
        computation.inputNumber = saveNumber;
    }
    else {
        console.log("subtracting")
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
    computation.subtraction();
    endings()
}

function multiplyButton() {
    console.log(computation);
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    if (computation.inputNumber === null) {
        console.log("starting")
        computation.inputNumber = saveNumber;
    }
    else {
        console.log("multiplying")
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
    computation.multiplic();
    endings()
}

function divideButton() {
    console.log(computation);
    let saveNumber = parseFloat(document.getElementById("screen").textContent);

    if (computation.inputNumber === null) {
        console.log("starting")
        computation.inputNumber = saveNumber;
    }
    else {
        console.log("dividing")
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
    endings()
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

    endings()
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
}

function endings() {
    computation.newNumber = true;
    roundNumber = parseFloat(computation.inputNumber.toFixed(2));
    document.getElementById("screen").innerHTML = roundNumber.toLocaleString();
    document.getElementById("period").disabled = false;
}