const nav = document.querySelector('.nav__list');
const burger = document.querySelector('.burger');
const navLinksAnim = document.querySelectorAll('.nav__link')

function burgerClick() {
	console.log("burger");
	nav.classList.toggle('nav__list_active');
	burger.classList.toggle('active');
	navLinksAnim.forEach((link, index) => {
		console.log(index);
	});
}