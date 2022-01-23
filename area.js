var first_side = document.querySelector("#first-side");
var second_side = document.querySelector("#second-side");
var third_side = document.querySelector("#third-side");
var calculate = document.querySelector("#calculate-btn");
var results = document.querySelector("#results");

function calculateResult() {
    if (first_side.value === "" || second_side.value === "" || third_side.value === "") {
        results.innerText = "Fill in the two values above"
        return
    }
    if (parseInt(first_side.value) <= 0 || parseInt(second_side.value) <= 0 || parseInt(third_side.value) <= 0) {
        results.innerText = "Please enter a positive number value"
        return
    }
    var a = parseInt(first_side.value)
    var b = parseInt(second_side.value)
    var c = parseInt(third_side.value)
    var semi_per = (a + b + c) / 2
    console.log(semi_per)
    var area = Math.sqrt(semi_per * (semi_per - a) * (semi_per - b) * (semi_per - c))
    if (area <= 0) {
        results.innerText = "The side lengths entered does not form a triangle"
    } else {
        results.innerText = "Area using Heron's formulae: " + area.toFixed(2)
    }
}

let clearResults = () => results.innerText = ""

calculate.addEventListener("click", calculateResult)
first_side.addEventListener("click", clearResults)
second_side.addEventListener("click", clearResults)
third_side.addEventListener("click", clearResults)