//Js inbuild object
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.max(45,50,77,88,99));
console.log(Math.min(45,50,77,88,99));
console.log(Math.sqrt(361));
console.log(Math.pow(8,2));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));
console.log(Math.round(1.5));
console.log(Math.round(1.4));
console.log(Math.floor(Math.random() * 200)+1);








document.getElementById('p1').innerHTML=(Math.floor(Math.random() * 200)+1);






const button = document.getElementById('btn');
const body = document.querySelector('body');
const color = ['red', 'green', 'blue', 'orange', 'pink', 'grey', 'lightblue'];

body.style.backgroundColor = 'black';
button.addEventListener('click', (e) => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
});


