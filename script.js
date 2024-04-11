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
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


