let switchCnt = document.getElementById("switch-cnt");
let signInCnt = document.getElementById("switch-c1");
let signUpCnt = document.getElementById("switch-c2");
let signInSwitch = document.getElementById("bc1");
let signUpSwitch = document.getElementById("bc2");
let allButtons = document.querySelectorAll(".button");

let getButtons = (e) => e.preventDefault()


let changeForm = (e) => {
    e.preventDefault();
    switchCnt.classList.add("is-gx");
    setTimeout(function() {
        switchCnt.classList.remove("is-gx");
    }, 300);
}

signUpSwitch.addEventListener("click", function() {
    signUpCnt.classList.toggle("active");
    signInCnt.classList.toggle("active");
    switchCnt.classList.toggle("active");
    signInCnt.style.zIndex = "201";
    signUpCnt.style.zIndex = "200";
});

signInSwitch.addEventListener("click", function() {
    signInCnt.classList.toggle("active");
    signUpCnt.classList.toggle("active");
    switchCnt.classList.toggle("active");
    signInCnt.style.zIndex = "200";
    signUpCnt.style.zIndex = "201";
});

allButtons.forEach((button) => {
    button.addEventListener("click", getButtons);
    button.addEventListener("click", changeForm);
});


//////////////////////////login form validation//////////////////////////
let SignUpForm = document.getElementById("up-form");
let SignInForm = document.getElementById("in-form");
let userName = document.getElementById("user-name");
let SignUpEmail = document.getElementById("up-email");
let SignUpPassword = document.getElementById("up-password");
let SignInEmail = document.getElementById("in-email");
let SignInPassword = document.getElementById("in-password");

let EmailError = document.getElementById("email-error");
let PasswordError = document.getElementById("password-error");

let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[_])[a-zA-Z0-9_]+$/;

let setError = (input, message) => {
    let inputControl = input.parentElement;
    let errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

let setSuccess = (input) => {
    let inputControl = input.parentElement;
    let errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

// sign up form validation

SignUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkSignInInputs();
});


let checkSignInInputs = () => {
    let UserNameValue = userName.value.trim();
    let SignUpEmailValue = SignUpEmail.value.trim();
    let SignUpPasswordValue = SignUpPassword.value.trim();

    if (UserNameValue === "") {
        setError(userName, "User Name cannot be blank");
    } else {
        setSuccess(userName);
    }

    if (SignUpEmailValue === "") {
        setError(SignUpEmail, "Email cannot be blank");
    } else if (!emailRegex.test(SignUpEmailValue)) {
        setError(SignUpEmail, "Email is not valid");
    } else {
        setSuccess(SignUpEmail);
    }

    if (SignUpPasswordValue === "") {
        setError(SignUpPassword, "Password cannot be blank");
    } else if (!passwordRegex.test(SignUpPasswordValue)) {
        setError(SignUpPassword, "Password is not valid");
    } else if (SignUpPasswordValue.length < 8) {
        setError(SignUpPassword, "Password must be 8 characters long");
    } else {
        setSuccess(SignUpPassword);
    }

    if (UserNameValue !== "" && SignUpEmailValue !== "" && SignUpPasswordValue !== "" && passwordRegex.test(SignUpPasswordValue) && emailRegex.test(SignUpEmailValue) && SignUpPasswordValue.length >= 8) {
        window.location.href = "index.html";
    }
};


// sign in form validation

SignInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        checkSignUpInputs();
    }

);

let checkSignUpInputs = () => {
    let SignInEmailValue = SignInEmail.value.trim();
    let SignInPasswordValue = SignInPassword.value.trim();

    if (SignInEmailValue === "") {
        setError(SignInEmail, "Email cannot be blank");
    } else if (!emailRegex.test(SignInEmailValue)) {
        setError(SignInEmail, "Email is not valid");
    } else {
        setSuccess(SignInEmail);
    }

    if (SignInPasswordValue === "") {
        setError(SignInPassword, "Password cannot be blank");
    } else if (!passwordRegex.test(SignInPasswordValue)) {
        setError(SignInPassword, "Password is not valid");
    } else if (SignInPasswordValue.length < 8) {
        setError(SignInPassword, "Password must be 8 characters long");
    } else {
        setSuccess(SignInPassword);
    }

    if (SignInEmailValue !== "" && SignInPasswordValue !== "" && passwordRegex.test(SignInPasswordValue) && emailRegex.test(SignInEmailValue) && SignInPasswordValue.length >= 8) {
        window.location.href = "index.html";
    }
};