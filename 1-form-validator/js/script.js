const form = document.getElementById('form');
const formData = {
    username: document.getElementById('username'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    password2: document.getElementById('password2'),
} 

//Show Input Error Message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

const showSuccess = input => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
    
//Event listeners
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (formData.username.value === '') {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }
    
    if (formData.email.value === '') {
        showError(email, "Email Address is required");
    } else {
        showSuccess(email);
    }
    
    if (formData.password.value === '') {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }
    
    if (formData.password2.value === '') {
        showError(password2, "Please confirm password");
    } else {
        showSuccess(password2);
    }
})