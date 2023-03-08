document.addEventListener('DOMContentLoaded', function() {
    let mobileBtn = document.querySelector('.nav-toggle');
    let drawer = document.querySelector('.drawer');
    let closeBtn = document.querySelector('.drawer-close');
    mobileBtn.addEventListener('click', function() {
        drawer.classList.toggle('open');
    });
    closeBtn.addEventListener('click', function() {
        drawer.classList.toggle('open');
    });
});