let btn = document.querySelector('.btn');
let arrow = document.querySelectorAll('.btn_icon');

btn.addEventListener('click', () => {
	arrow.forEach(elem => elem.classList.toggle('js-icon'));
});