const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const navLinks = document.querySelectorAll('.nav__link');
let color = '';
let textColor = '';

if (localStorage.getItem('bg-color') !==null){
	color = localStorage.getItem('bg-color');
	textColor = localStorage.getItem('text-color');
	header.style.background = color;
	footer.style.background = color;
	navLinks.forEach((el) => {
		el.style.color = textColor;
	});
}

function choiceDark() {
	console.log('dark');
	header.style.background = 'black';
	header.style.transition = '1s ease-out 0.5s';
	footer.style.background = 'black';
	footer.style.transition = '1s ease-out 0.5s';
	navLinks.forEach((el) => {
		el.style.transition = '1s ease-out 0.5s';
		el.style.color = 'white';
	});
	localStorage.setItem('bg-color', 'black');
	localStorage.setItem('text-color', 'white');
}

function choiceWhite() {
	console.log('white');
	header.style.background = 'skyblue';
	header.style.transition = '1s ease-out 0.5s';
	footer.style.background = 'skyblue';
	footer.style.transition = '1s ease-out 0.5s';
	navLinks.forEach((el) => {
		el.style.transition = '1s ease-out 0.5s';
		el.style.color = 'black';
	});
	localStorage.setItem('bg-color', 'skyblue');
	localStorage.setItem('text-color', 'black');
}