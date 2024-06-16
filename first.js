const animatedElements = document.getElementsByClassName('balloon');
const audio = new Audio('birthday tune.mp3');
var Birth_year = 2007;
var current_age = document.querySelector('#age');
var current_Date = document.querySelector('.permanent h2 span');
var permanent = document.querySelector('.permanent');
var content = document.querySelector('.content');

var x1 = window.matchMedia("(max-width: 600px)");
if(x1.matches){
   var y = document.querySelector('.header'); 
   y.textContent = "Next Birthday";

   
}


function show(){
    for (var i = 0; i < animatedElements.length; i++) {
        animatedElements[i].style.display = 'block';
    }
}
for (var i = 0; i < animatedElements.length; i++) {
    animatedElements[i].addEventListener('animationend', function() {
        this.style.display = 'none';
    });
}


async function fetchDateTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/ip');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return new Date(data.datetime);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

async function isTodayJune15() {
    const currentDate = await fetchDateTime();
    if (currentDate) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();

        var age = document.createTextNode(year-Birth_year+'th');
        current_age.textContent = "";
        current_age.appendChild(age);

       
        var today = document.createTextNode(`${date}-${month}-${year}`);
        current_Date.textContent = "";
        current_Date.appendChild(today);
        return month === 5 && date === 17;
    } else {
        return false;
    }
}

async function checkDate() {
    const result = await isTodayJune15();
    const dateCheckElement = document.querySelector('.main');
    if (result) {
        permanent.style.display = 'none';
        dateCheckElement.style.display = "block";
        audio.play();
        audio.loop = true;
    } else {
        dateCheckElement.style.display = "none";
        permanent.style.display = 'block';

    }
}

checkDate();


async function calculateDaysUntilJune15() {
    const currentDate = await fetchDateTime();
    const currentYear = currentDate.getFullYear();
    const june15ThisYear = new Date(`${currentYear}-06-15`);

    if (currentDate > june15ThisYear) {
        june15ThisYear.setFullYear(currentYear + 1);
    }

    const timeDiff = june15ThisYear - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysLeft;
}

async function displayDaysUntilJune15() {
    const daysLeft = await calculateDaysUntilJune15();
    const content = document.querySelector(".content");
    content.textContent = `${daysLeft} Days Left`;
}

displayDaysUntilJune15();


var menu = document.querySelector('#menu');
var cross = document.querySelector('#cross');
var side = document.querySelector('.sidenav');
menu.addEventListener('click', function() {
    side.style.width = "100%";

});
cross.addEventListener('click', function() {
    side.style.width = "0%";
    
});



var menu1 = document.querySelector('#menu1');
var cross = document.querySelector('#cross');
menu1.addEventListener('click', function() {
    side.style.width = "100%";

});
cross.addEventListener('click', function() {
    side.style.width = "0%";
    
});


