// Select the elements
let message = document.querySelector("#message");
let nameInput = document.querySelector("#nameInput");
let welcomeBtn = document.querySelector("#welcomeBtn");
let checkBtn = document.querySelector("#checkBtn");
let result = document.querySelector("#result");
let counter = document.querySelector(".counter");


// Welcome button
welcomeBtn.onclick = function () {

    message.textContent = "Welcome, " + nameInput.value;

    counter.textContent = Number(counter.textContent) + 1;
};


// Check age button
checkBtn.onclick = function () {

    let age = Number(prompt("Please enter your age"));

    if (isNaN(age)) {
        result.textContent = "Please enter a valid age.";
        return;
    }

    let sure = confirm("Are you sure you want to continue?");

    if (sure) {

        switch (true) {

            case age >= 18:
                result.textContent = "You are allowed";
                break;

            case age >= 13:
                result.textContent = "You need permission";
                break;

            case age >= 0:
                result.textContent = "You are too young";
                break;

            default:
                result.textContent = "Please enter a valid age.";
        }

    } else {

        result.textContent = "You cancelled";

    }
};
