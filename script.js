const email = document.querySelector('#email');

const arrow = document.querySelector('#arrow');

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(email);
};

arrow.addEventListener('click', (event) => {
    const emailId = email.value;

    if(emailId === "" || !validateEmail(emailId)) {
        document.querySelector('#error').style.display = "inline-block";
        document.querySelector('#error-msg').style.display = "inline-block";
    }
    else {
        document.querySelector('#error').style.display = "none";
        document.querySelector('#error-msg').style.display = "none";
    }
});