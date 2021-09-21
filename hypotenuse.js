var base_length = document.querySelector("#first-side");
var height_length = document.querySelector("#second-side");
var calculate = document.querySelector("#calculate-btn");
var results = document.querySelector("#results");

function calculateResult() {
    if (base_length.value === "" || height_length.value === "") {
        results.innerText = "Fill in the two values above"
        return
    }
    if (parseInt(base_length.value) <= 0 || parseInt(height_length.value) <= 0) {
        results.innerText = "Please enter a positive number value"
        return
    }
    var hypo = Math.sqrt(Math.pow(base_length.value, 2) + Math.pow(height_length.value, 2))
    results.innerText = "Hypotenuse Length: " + hypo.toFixed(2)
}

function clearResults() {
    results.innerText = ""
}

calculate.addEventListener("click", calculateResult)
base_length.addEventListener("click", clearResults)
height_length.addEventListener("click", clearResults)