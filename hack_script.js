
window.onscroll = function() {stickNavbar()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickNavbar() {
if (window.pageYOffset > sticky) {
navbar.classList.add("sticky");
} else {
navbar.classList.remove("sticky");
}
}

const particleContainer = document.querySelector('.particles');
const starBackground = document.querySelector('.star-background');

for (let i = 0; i < 100; i++) {
const particle = document.createElement('div');
particle.classList.add('particle');
particle.style.top = `${Math.random() * 100}vh`;
particle.style.left = `${Math.random() * 100}vw`;
particle.style.animationDelay = `${Math.random() * 10}s`;
particleContainer.appendChild(particle);
}

for (let i = 0; i < 300; i++) {
const star = document.createElement('div');
star.classList.add('star');
star.style.top = `${Math.random() * 100}vh`;
star.style.left = `${Math.random() * 100}vw`;
starBackground.appendChild(star);
}
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursorinner.style.left = x + 'px';
cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
cursor.classList.add('click');
cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
cursor.classList.remove('click')
cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
item.addEventListener('mouseover', () => {
cursor.classList.add('hover');
});
item.addEventListener('mouseleave', () => {
cursor.classList.remove('hover');
});
})