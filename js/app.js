var bar = document.querySelector('#bar');
var navbar = document.querySelector('.navbar');
bar.addEventListener('click', function() {
    navbar.classList.toggle('active');
});
console.log("bar");