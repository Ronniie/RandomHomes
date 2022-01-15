const searchForm = document.getElementById("searchForm");
const searchFormMobile = document.getElementById("searchFormMobile");

let url = function(int){
    return `https://www.zillow.com/homedetails/${int}_zpid/`;
}

let getRandomInt = function() {
    return Math.floor(Math.random() * 98031697) + 1;
}

let setPause = function(bool=null){
    let value;

    if(bool === null){
        value = document.getElementById("pause").innerHTML;
    }else{
        value = bool;
    }
    if(value === "true"){
        document.getElementById("pause").innerHTML = "false";
    }else{
        document.getElementById("pause").innerHTML = "true";
    }
}

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    let value = searchForm.elements['searchBox'].value;

    window.location.href = url(value);
});

searchFormMobile.addEventListener("submit", function(e){
    e.preventDefault();
    let value = searchFormMobile.elements['searchBoxMobile'].value;

    window.location.href = url(value);
});

document.addEventListener("DOMContentLoaded", function(){
    let timeLeft = 15;
    $("#searchBox").on("change keyup paste click", function(){
        setPause("false");
    });
    $("#searchBoxMobile").on("change keyup paste click", function(){
        setPause("false");
    });
    setInterval(function () {
        timeLeft--;
        if(document.getElementById("pause").innerHTML === "false"){
            if (timeLeft <= 0) {
                timeLeft = 16;
                window.location.href = url(Math.floor(Math.random() * 98031697) + 1);
            } else {
                let plural = timeLeft > 1 ? 's' : '';
                document.getElementById("countdown").innerHTML = `Countdown (${timeLeft} second${plural})`;
            }
        }else {
            document.getElementById("countdown").innerHTML = "Paused";
        }
    }, 1000);
});

// Burger Menu
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
