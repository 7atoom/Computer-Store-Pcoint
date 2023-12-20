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


////////////////////////// Validate Contact form //////////////////////////  

// Get the form element
var formElement = document.getElementById("GetInTouch");

// Get the HTML code of the form
var formHTML = formElement.innerHTML;

// Print the form HTML code
console.log(formHTML);
let contactName = document.getElementById("review-name");
let contactEmail = document.getElementById("review-email");
let contactMessage = document.getElementById("review-message");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    validatedContactForm();

});

let validatedContactForm = () => {
    let contactNameValue = contactName.value.trim();
    let contactEmailValue = contactEmail.value.trim();
    let contactMessageValue = contactMessage.value.trim();

    if (contactNameValue === "") {
        setError(contactName, "Name cannot be blank");
    } else {
        setSuccess(contactName);
    }

    if (contactEmailValue === "") {
        setError(contactEmail, "Email cannot be blank");
    } else if (!emailRegex.test(contactEmailValue)) {
        setError(contactEmail, "Email is not valid");
    } else {
        setSuccess(contactEmail);
    }

    if (contactMessageValue === "") {
        setError(contactMessage, "Message cannot be blank");
    } else {
        setSuccess(contactMessage);
    }

    if (contactNameValue !== "" && contactEmailValue !== "" && contactMessageValue !== "" && emailRegex.test(contactEmailValue)) {
        window.location.href = "index.html";
    }
};