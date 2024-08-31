let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuessButton');
const message = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

submitGuessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = "Por favor, insira um número válido entre 1 e 100.";
    } else if (userGuess < randomNumber) {
        message.textContent = "Muito baixo! Tente novamente.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Muito alto! Tente novamente.";
    } else {
        message.textContent = `Parabéns! Você acertou! O número era ${randomNumber}.`;
        restartButton.style.display = 'inline-block';
    }
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = '';
    message.textContent = '';
    restartButton.style.display = 'none';
});