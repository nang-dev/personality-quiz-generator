let currentQuestion = 0;

function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
});


function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}


function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    userAnswers[answerKey] = (userAnswers[answerKey] || 0) + 1;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    const result = pairs.map(pair => topLetters[pair]).join('');
    const resultTypes = {
        "ISTJ": 0, "ISFJ": 1, "INFJ": 2, "INTJ": 3,
        "ISTP": 4, "ISFP": 5, "INFP": 6, "INTP": 7,
        "ESTP": 8, "ESFP": 9, "ENFP": 10, "ENTP": 11,
        "ESTJ": 12, "ESFJ": 13, "ENFJ": 14, "ENTJ": 15
    };
    const resultNumber = resultTypes[result];
    window.location.href = `results.html?result=${resultNumber}`;
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion();
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


