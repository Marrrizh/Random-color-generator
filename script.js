let colorBlock = document.querySelector('.color');
let colorCode = document.querySelector('.code');
let generateButton = document.querySelector('.button');

function getRandomColor() {
  let color = '#'
  for (let i=0; i<6; i++) {
let symbols = "0123456789ABCDEF";
let randomIndex=Math.floor(Math.random()*16);
color+=symbols[randomIndex];
  }

}

generateButton.addEventListener('click', getRandomColor);