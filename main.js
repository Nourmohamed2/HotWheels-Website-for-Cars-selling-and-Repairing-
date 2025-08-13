let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');

}



//header
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});
const video = document.querySelector('video');

function myFunction() {
var Video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
  if (video.paused) {
    Video.play();
    btn.innerHTML = "Pause";
  } else {
    Video.pause();
    btn.innerHTML = "Play";
  }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("video-container");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Video play/pause functionality
function myFunction() {
    let videos = document.querySelectorAll("video");
    videos.forEach(video => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// Initial display setting
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});







