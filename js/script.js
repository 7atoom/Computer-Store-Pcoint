//////////////////////////get the data from the server//////////////////////////
let reviewsCnt = document.getElementById("slides");
let quotes = document.getElementsByClassName("quote");
let bulletsCnt = document.getElementsByClassName("bullets");
let bullets = document.getElementsByClassName("swiper-btn");

let currentIndex = 0;

//////////////////////////function start//////////////////////////

function changeQuote() {
    // Remove active class from all bullets and quotes
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove("active");
        quotes[i].classList.remove("active");
    }

    // Add active class to the next bullet and quote
    currentIndex = (currentIndex + 1) % bullets.length;
    bullets[currentIndex].classList.add("active");
    quotes[currentIndex].classList.add("active");
}

// Set interval to change quote every 3 seconds (adjust as needed)
setInterval(changeQuote, 4000);



/////////////////////////// create a new review ///////////////////////////
let reviewName = document.getElementById("review-name");
let reviewEmail = document.getElementById("review-email");
let reviewMessage = document.getElementById("review-message");
let reviewBtn = document.getElementById("submit-review");

let reviewNameValue = reviewName.value.trim();
let reviewEmailValue = reviewEmail.value.trim();
let reviewMessageValue = reviewMessage.value.trim();

reviewBtn.addEventListener("click", function() {
    createReview(reviewNameValue, reviewEmailValue, reviewMessageValue);
    createBullet();
});

let createReview = (name, email, message) => {
    let review = document.createElement("div");
    review.classList.add("quote");
    let reviewNameCnt = document.createElement("div");
    reviewNameCnt.classList.add("name");
    let reviewName = document.createElement("h3");
    reviewName.innerText = name;
    let reviewMessageCnt = document.createElement("div");
    reviewMessageCnt.classList.add("text");
    let reviewQoute1 = document.createElement("img");
    reviewQoute1.src = "../images/te1.png";
    let reviewMessage = document.createElement("p");
    reviewMessage.innerText = message;
    let reviewQoute2 = document.createElement("img");
    reviewQoute2.src = "../images/te2.png";

    reviewNameCnt.appendChild(reviewName);
    reviewMessageCnt.appendChild(reviewQoute1);
    reviewMessageCnt.appendChild(reviewMessage);
    reviewMessageCnt.appendChild(reviewQoute2);
    review.appendChild(reviewNameCnt);
    review.appendChild(reviewMessageCnt);
    reviewsCnt.appendChild(review);
};

let createBullet = () => {
    let bullet = document.createElement("div");
    bullet.classList.add("swiper-btn");
    bulletsCnt.appendChild(bullet);
};