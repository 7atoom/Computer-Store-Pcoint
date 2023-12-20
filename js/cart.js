////////////////////////// shopping cart //////////////////////////

let cartBtn = document.querySelector(".cart span");
let cart = document.querySelector(".cart");
let cartValue = cartBtn.innerHTML;
let AddToCartBtn = document.getElementById("addToCart");

let itemsCnt = 0;

AddToCartBtn.addEventListener('click', function() {
    itemsCnt++;
    cartBtn.innerHTML = itemsCnt;
});

////////////////////////// items number //////////////////////////
let itemsCounter = document.querySelector(".number-of-items-cont span");
let itemsCounterValue = itemsCounter.innerHTML;
let upBtn = document.querySelector(".fa-angle-up");
let downBtn = document.querySelector(".fa-angle-down");

upBtn.addEventListener('click', function() {
    itemsCounterValue++;
    itemsCounter.innerHTML = itemsCounterValue;
});

downBtn.addEventListener('click', function() {
    if (itemsCounterValue > 1) {
        itemsCounterValue--;
    }
    itemsCounter.innerHTML = itemsCounterValue;
});