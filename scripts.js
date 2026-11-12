const canvas = document.querySelector('.plan');
const chaise = document.querySelector('.chaise');

canvas.addEventListener('mousemove', (event) => {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x + " " + y);
    chaise.style.top = `${y}px`;
    chaise.style.left = `${x}px`;
    console.log(chaise.style);
})