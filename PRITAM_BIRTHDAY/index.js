var x = 0;
var Name = document.querySelector('.start h2');
var audio = new Audio('companion.mp3');
audio.play();
audio.volume = 0.5;  
audio.loop = true;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        audio.pause();
    } else {
        audio.play();
    }
});
setInterval( () => {
    if(x%2 === 0){
        Name.textContent = 'প্রীতম দত্ত';
    }
    else{
        Name.textContent = 'Pritam Dutta';
    }
    x++;
}, 2000);


Name.addEventListener('mouseover', () => {
    var pop = document.querySelector('.pop');
    pop.style.opacity = '1';
});
Name.addEventListener('mouseout', () => {
    var pop = document.querySelector('.pop');
    pop.style.opacity = '0';
});


var x1 = window.matchMedia("(max-width: 600px)")
if(x1.matches){
window.addEventListener('click', function(){
    this.location.replace('first.html');
});
}





