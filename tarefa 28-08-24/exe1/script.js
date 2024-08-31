const inputField = document.getElementById('userInput');
const showMessageButton = document.getElementById('showMessageButton');
const messageDiv = document.getElementById('message');
showMessageButton.addEventListener('click', function() {
    const userInput = inputField.value.trim();
    if (userInput === "") {
        messageDiv.textContent = "Por favor, digite algo no campo de texto.";
        messageDiv.style.color = "red"; 
    } else {
        messageDiv.textContent = `Você digitou: ${userInput}`;
        messageDiv.style.color = "green";
    }
});