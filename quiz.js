// function declarstion to check answer
function checkAnswer() {
    let correctAnswer = "4";
    // to retrieve user's answer
    let userAnswer = document.querySelector("input[name= quiz]:checked").value;
    // to check if the answer is correct
    if (userAnswer === correctAnswer) {
        document.getElementById ("feedback").textContent = "Correct! Well done.";
    }
    else {
        document.getElementById ("feedback").textContent = "That's incorrect. Try again!";
    }
}

// adding event listener to the submit button
document.getElementById("submit-answer").addEventListener('click', checkAnswer)