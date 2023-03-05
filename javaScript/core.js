function numberButtons(e) {
    let screenAdd = e.target.textContent;
    let screenOut = document.getElementById("screen");

    if (screenOut.textContent === "0") {
        screenOut.innerHTML = screenOut.innerHTML.replace(0, screenAdd);
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



    screenOut.innerHTML = "0"
}