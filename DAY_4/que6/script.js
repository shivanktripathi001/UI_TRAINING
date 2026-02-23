const changeBtn = document.querySelector('#changeBtn');
const resetBtn = document.querySelector('#resetBtn');
const countDisplay = document.querySelector('#count');

let count = 0;

changeBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
  
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
  document.body.style.backgroundColor = '#f5f5f5';
});
