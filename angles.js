var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");
var angle3 = document.querySelector("#angle-3");
var calculate = document.querySelector("#calculate-btn");
var results = document.querySelector("#results");

function calculateResult() {
    if (angle1.value === "" || angle2.value === "" || angle3.value === "") {
        results.innerText = "Fill in the two values above"
        return
    }
    if (parseInt(angle1.value) <= 0 || parseInt(angle2.value) <= 0 || parseInt(angle3.value) <= 0) {
        results.innerText = "Please enter a positive number value"
        return
    }
    var a = parseInt(angle1.value)
    var b = parseInt(angle2.value)
    var c = parseInt(angle3.value)
    var total = a + b + c
    if (total === 180) {
        results.innerText = "The angles form a Triangle 🥳"
    } else if (total >= 180) {
        results.innerText = "The angles do not form a triangle\nSum of angles is above 180"
    } else if (total <= 180) {
        results.innerText = "The angles do not form a triangle\nSum of angles is less than 180"
    }
}

function clearResults() {
    results.innerText = ""
}

calculate.addEventListener("click", calculateResult)
angle1.addEventListener("click", clearResults)
angle2.addEventListener("click", clearResults)
angle3.addEventListener("click", clearResults)