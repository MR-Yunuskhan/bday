var images = [
    "images/IMG-20240613-WA0001.jpg",
    "images/IMG-20240613-WA0002.jpg",
    "images/IMG-20240613-WA0003.jpg",
    "images/IMG-20240613-WA0004.jpg",
    "images/IMG-20240613-WA0005.jpg",
    "images/IMG-20240614-WA0001.jpg",
    "images/IMG-20240614-WA0003.jpg",
    "images/IMG-20240614-WA0004.jpg",
    "images/IMG-20240614-WA0005.jpg",
    "images/IMG-20240614-WA0006.jpg",
    "images/IMG-20240614-WA0007.jpg",
    "images/IMG-20240613-WA0015.jpg",
    "images/IMG-20240614-WA0001.jpg",
    "images/IMG-20240614-WA0002.jpg",
    "images/IMG-20240614-WA0003.jpg",
    "images/IMG-20240614-WA0004.jpg",
    "images/IMG-20240614-WA0005.jpg",
    "images/IMG-20240614-WA0006.jpg",
    "images/IMG-20240614-WA0007.jpg",
    "images/WhatsApp Image 2024-06-14 at 21.20.11_c1d5bed0.jpg",
    "images/WhatsApp Image 2024-06-14 at 21.20.12_2370ff33.jpg",
    "images/WhatsApp Image 2024-06-14 at 21.20.12_6302fe49.jpg",
    "images/WhatsApp Image 2024-06-14 at 21.21.01_2f132944.jpg",
    "images/WhatsApp Image 2024-06-16 at 22.48.16_78e59916.jpg",
    "images/WhatsApp Image 2024-06-16 at 22.48.15_790aea40.jpg"
];

var image = document.querySelector('.container img');
var i = 0;
setInterval(function slide(){
    image.src = images[i];
    i++;
    if(i === images.length){
        i = 0;
    }
}, 2000);

var audio = new Audio('maroon_5_piano_cover.mp3');
audio.play();
audio.volume = .5;  
audio.loop = true;

var menu = document.querySelector('#menu');
var cross = document.querySelector('#cross');
var side = document.querySelector('.sidenav');
menu.addEventListener('click', function() {
    side.style.width = "100%";

});
cross.addEventListener('click', function() {
    side.style.width = "0%";
    
});