function isNumber(value){
    return !isNaN(value) && value.trim() !== '';
}
const num1Field = document.getElementById('num1');
const num2Field = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('calculateButton');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', function(){
    const num1 = num1Field.value.trim();
    const num2 = num2Field.value.trim();
    const operation = operationSelect.value;

    if(!isNumber(num1) || !isNumber(num2)){
        resultDiv.textContent = "Por favor, insira números válidos.";
        resultDiv.className = "error";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch(operation){
        case "add":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            if(number2 === 0){
                resultDiv.textContent = "Divisão por zero não é permitida."
                resultDiv.className = "error"
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultDiv.textContent = "Selecione uma operação válida.";
            resultDiv.className = "error";
            return;
    }
    resultDiv.textContent = `Resultado: ${result}`;
    resultDiv.className = "";
});
