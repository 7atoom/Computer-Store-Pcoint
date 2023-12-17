//////////////////////////get the data from the server//////////////////////////
let quotes = document.getElementsByClassName("quote");
let bullets = document.getElementsByClassName("swiper-btn");
let switchCnt = document.getElementById("switch-cnt");
let signInCnt = document.getElementById("switch-c1");
let signUpCnt = document.getElementById("switch-c2");
let signInSwitch = document.getElementById("bc1");
let signUpSwitch = document.getElementById("bc2");
let allButtons = document.querySelectorAll(".button");




//////////////////////////function start//////////////////////////
for (let i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener("click", function() {
        // Remove active class from all bullets
        for (let j = 0; j < bullets.length; j++) {
            bullets[j].classList.remove("active");
            quotes[j].classList.remove("active");
        }

        // Add active class to the clicked bullet
        this.classList.add("active");
        quotes[i].classList.add("active");
    });
}

let getButtons = (e) => e.preventDefault()


let changeForm = (e) => {
    e.preventDefault();
    switchCnt.classList.add("is-gx");
    setTimeout(function() {
        switchCnt.classList.remove("is-gx");
    }, 300);

    // if (signUpSwitch.classList.contains("active")) {
    //     signUpSwitch.classList.remove("active");
    //     signInSwitch.classList.add("active");
    //     signUpCnt.classList.remove("active");
    //     signInCnt.classList.add("active");
    //     signInCnt.style.zIndex = "201";
    //     signUpCnt.style.zIndex = "200";
    //     switchCnt.classList.toggle("active");
    // } else {
    //     signInSwitch.classList.remove("active");
    //     signUpSwitch.classList.add("active");
    //     signInCnt.classList.remove("active");
    //     signUpCnt.classList.add("active");
    //     switchCnt.classList.toggle("active");
    //     signUpCnt.style.zIndex = "201";
    //     signInCnt.style.zIndex = "200";
    // }
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