// Select the elements
let message = document.querySelector("#message");
let nameInput = document.querySelector("#nameInput");
let welcomeBtn = document.querySelector("#welcomeBtn");
let checkBtn = document.querySelector("#checkBtn");
let result = document.querySelector("#result");
let counter = document.querySelector(".counter");


// Welcome button
welcomeBtn.onclick = function () {
    message.innerHTML = "Welcome, " + nameInput.value;
};


// Check age button
checkBtn.onclick = function () {

    let age = Number(prompt("Please enter your age"));

    let sure = confirm("Are you sure you want to continue?");

    if (sure) {

        switch (true) {

            case age >= 18:
                result.innerHTML = "You are allowed";
                break;

            case age >= 13 && age <= 17:
                result.innerHTML = "You need permission";
                break;

            case age < 13:
                result.innerHTML = "You are too young";
                break;
        }

    } else {
        result.innerHTML = "You cancelled";
    }
};


// Counter
welcomeBtn.onmousemove = function () {
    counter.innerHTML = Number(counter.innerHTML) + 1;
};