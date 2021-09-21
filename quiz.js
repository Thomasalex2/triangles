var submit = document.querySelector("#submit");
var results = document.querySelector("#results");
var correct_ans = ["90", "Right Angled", "One right angle", "12, 16, 20",
                    "Equilateral", "100", "30", "a + b + c", "None", "45"]

function getResults() {
    given_ans = []
    for (var i = 1; i <= 10; i++) {
        var name_tag = "qus" + i + "_option"
        var entry = document.querySelector('input[name="'+name_tag+'"]:checked')
        var answer = entry !== null ? entry.value : "null"
        given_ans.push(answer)
    }
    calculateResult(given_ans)
}


function calculateResult(given_ans) {
    console.log(given_ans)
    var points = 0
    for (var i = 0; i < 10; i++) {
        if (given_ans[i] === correct_ans[i]) {
            console.log("Correct")
            points++
        } else {
            console.log("Wrong")
            continue
        }
    }
    results.innerText = "Your score is: " + points
}

submit.addEventListener("click", getResults)