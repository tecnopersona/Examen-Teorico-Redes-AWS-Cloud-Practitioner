import { questions } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const questionsContainer = document.getElementById('questions-container');
    const resultsContainer = document.getElementById('results-container');
    const scoreDisplay = document.getElementById('score');

    function displayQuestions() {
        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <p>${index + 1}. ${question.question}</p>
                <div class="options">
                    ${question.options.map((option, optionIndex) => `
                        <label>
                            <input type="radio" name="question${index}" value="${optionIndex}" required>
                            ${option}
                        </label>
                    `).join('')}
                </div>
            `;
            questionsContainer.appendChild(questionDiv);
        });
    }

    function calculateScore() {
        let score = 0;
        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === question.correctAnswer) {
                score++;
            }
        });
        return score;
    }

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const score = calculateScore();
        scoreDisplay.textContent = `Obtuviste ${score} de ${questions.length} respuestas correctas.`;
        resultsContainer.style.display = 'block';
    });

    displayQuestions();
});

