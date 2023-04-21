let title = document.getElementById('title');
let space3 = document.getElementById('space3');
let space1 = document.getElementById('space1');
let space2 = document.getElementById('space2');
let space4 = document.getElementById('space4');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    title.style.marginBottom = value * 2 + 'px';
    space3.style.marginBottom = value * 2 + 'px';
    space1.style.marginBottom = Math.max(value * -1.5, -500) + 'px';
    space1.style.marginRight = Math.max(value * -1.5, -500) + 'px';
    space4.style.marginRight = Math.max(value * -1.5, -950) + 'px';
    space2.style.marginBottom = value * -1.2 + 'px';
    space2.style.marginLeft = value * -1.2 + 'px';
});
