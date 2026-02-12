document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Clear previous errors
    clearErrors();
    
    let isValid = true;
    
    // Validate name
    if (name.value.trim() === '') {
        showError(name, nameError, 'Name is required');
        isValid = false;
    }
    
    // Validate email
    if (email.value.trim() === '') {
        showError(email, emailError, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, emailError, 'Please enter a valid email');
        isValid = false;
    }
    
    // Validate password
    if (password.value.trim() === '') {
        showError(password, passwordError, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, passwordError, 'Password must be at least 6 characters');
        isValid = false;
    }
    
    // If form is valid
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
}

function clearErrors() {
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error');
    
    inputs.forEach(input => input.classList.remove('error'));
    errors.forEach(error => error.textContent = '');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}