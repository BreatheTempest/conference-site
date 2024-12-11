const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const disableScrolling = () => {
	document.documentElement.style.overflow = 'hidden';
	document.body.style.overflow = 'hidden';
};

const enableScrolling = () => {
	document.documentElement.style.overflow = '';
	document.body.style.overflow = '';
};

hamburger.addEventListener('click', () => {
	menu.classList.toggle('active');
	hamburger.classList.toggle('active');

	if (menu.classList.contains('active')) {
		disableScrolling();
	} else {
		enableScrolling();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		hamburger.classList.remove('active');
		menu.classList.remove('active');
		enableScrolling();
	}
});
