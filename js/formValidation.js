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

// Check for valid email
function checkEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    if(regEx.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid')
    }
}

function checkRequired(inputObj) {
    const keys = Object.values(formData)
    for (const input of keys) {
        if(input.value.trim() === '') {
            showError(input, ` ${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    }
}

// Checks input length
function checkLength (input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`)
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Event listeners
form.addEventListener('submit', function (event) {
    event.preventDefault();

    checkRequired(Object.keys(formData));
    checkLength(formData.username, 3, 15);
    checkLength(formData.password, 6, 25);
    checkEmail(email);

    // **Long way - Gets messy if we have more fields to check.**

    // if (formData.username.value === '') {
    //     showError(username, "Username is required");
    // } else {
    //     showSuccess(username);
    // }

    // if (formData.email.value === '') {
    //     showError(email, "Email Address is required");
    // } else if (!isValidEmail(formData.email.value)) {
    //     showError(email, "Email is not valid");
    // } else {
    //     showSuccess(email);
    // }

    // if (formData.password.value === '') {
    //     showError(password, "Password is required");
    // } else {
    //     showSuccess(password);
    // }

    // if (formData.password2.value === '') {
    //     showError(password2, "Please confirm password");
    // } else {
    //     showSuccess(password2);
    // }
})