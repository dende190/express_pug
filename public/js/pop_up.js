var open1 = document.getElementById('open1')
var open2 = document.getElementById('open2')
var open3 = document.getElementById('open3')
var close = document.getElementById('close')
const modal_container = document.getElementById('pop_up_free_start')

open1.addEventListener('click', () => {
    modal_container.style.display = "block";
});

open2.addEventListener('click', () => {
    modal_container.style.display = "block";
});

open3.addEventListener('click', () => {
    modal_container.style.display = "block";
});

close.addEventListener('click', () => {
    modal_container.style.display = "none";
});