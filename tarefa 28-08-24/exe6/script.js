const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', () => {
    box1.classList.remove('red');
    box1.classList.add('orange');
    box2.classList.remove('green');
    box2.classList.add('purple');
    if (box3.classList.contains('blue')) {
        box3.classList.remove('blue');
        box3.classList.add('yellow');
    } else {
        box3.classList.remove('yellow');
        box3.classList.add('blue');
    }
});