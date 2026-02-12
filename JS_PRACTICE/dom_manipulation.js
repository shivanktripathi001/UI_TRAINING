
// getting elemets
// Single element
const header = document.getElementById('header');
const nav = document.querySelector('.nav');

// Multiple elements
const buttons = document.querySelectorAll('.btn');
const paragraphs = document.getElementsByTagName('p');

// event listner
const button = document.querySelector('#myBtn');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// With arrow function
button.addEventListener('click', () => {
    console.log('Clicked!');
});

// Changing content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Changing styles
element.style.color = "red";
element.style.backgroundColor = "blue";

// Adding/removing classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('open');

// Creating and adding elements
const newDiv = document.createElement('div');
newDiv.textContent = "Hello";
document.body.appendChild(newDiv);