// ------HEADER BUTTONS-----

// SIDE MENU OPEN/CLOSE

const menuButton = document.querySelector('#kob-menu-mobile');
const sideMenu = document.querySelector('#kob-sidemenu');

menuButton.addEventListener('click', () => {
	sideMenu.classList.toggle('kob-sidemenu-hidden');
});

// SEARCH FIELD TOGGLE

const search = document.querySelector('#kob-magnifier-mobile');

search.addEventListener('click', () => {
	const mobile = search.parentNode.previousElementSibling;
	const logo = search.parentNode.previousElementSibling.previousElementSibling;
	const searchInput = search.nextElementSibling;
	const mainWrap = search.parentNode.parentNode.parentNode;
	const searchWrap = search.parentNode.parentNode;

	mainWrap.classList.remove('kob-header-mobile-wrapp-1');
	mainWrap.classList.add('kob-header-mobile-wrapp-2');

	searchWrap.classList.remove('kob-header-search-div-mobile');
	searchWrap.classList.add('kob-header-search-div-mobile-2');

	mobile.classList.add('kob-dnone');
	logo.classList.add('kob-dnone');

	search.classList.remove('kob-magnifier-mobile-1');
	search.classList.add('kob-magnifier-mobile-2');

	searchInput.classList.remove('kob-wnone');
});

window.addEventListener('click', (e) => {
	if (!e.target.classList.contains('kob-magnifier-mobile-2')) {
		if (!e.target.classList.contains('kob-header-search-input-mobile')) {
			const search = document.querySelector('#kob-magnifier-mobile');
			const mobile = search.parentNode.previousElementSibling;
			const logo = search.parentNode.previousElementSibling.previousElementSibling;
			const searchInput = search.nextElementSibling;
			const mainWrap = search.parentNode.parentNode.parentNode;
			const searchWrap = search.parentNode.parentNode;

			mainWrap.classList.remove('kob-header-mobile-wrapp-2');
			mainWrap.classList.add('kob-header-mobile-wrapp-1');

			searchWrap.classList.remove('kob-header-search-div-mobile-2');
			searchWrap.classList.add('kob-header-search-div-mobile');

			mobile.classList.remove('kob-dnone');
			logo.classList.remove('kob-dnone');

			search.classList.remove('kob-magnifier-mobile-2');
			search.classList.add('kob-magnifier-mobile-1');

			searchInput.classList.add('kob-wnone');
		}
	}
});

// CATALOG DROP DOWN

const catalogButton = document.querySelector('#kob-catalog');
const openCatalog = document.querySelector('#kob-openCatalog');

catalogButton.addEventListener('click', () => {
	openCatalog.classList.remove('dnone');
});

// -----FOOTER BUTTONS------
// scroll up

// srcroll-up
const scroll = document.querySelector('#scroll-top');

$(window).scroll(function() {
	if ($(this).scrollTop() > 40) {
		$('#scroll-top').fadeIn(500);
	} else {
		$('#scroll-top').fadeOut(500);
	}
});

$('#scroll-top').click(function() {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
});

// ------CATALOG PAGE----------
// more buttons
// catalog

const catalogMore = Array.prototype.slice.call(document.querySelectorAll('#catalog-more'));

catalogMore.forEach((event) => {
	event.addEventListener('click', () => {
		if (event.classList.contains('collapsed')) {
			event.innerHTML = 'Свернуть';
		} else {
			event.innerHTML = 'Еще...';
		}
	});
});

// color change for product-item

const productItem = Array.prototype.slice.call(document.querySelectorAll('#product-name'));

productItem.forEach((item) => {
	switch (item.innerHTML) {
		case 'В наличии':
			item.style.color = '#2E7D32';
			break;
		case 'Под заказ':
			item.style.color = '#F57F17';
			break;
		case 'Ожидается':
			item.style.color = '#9E9D24';
			break;
		default:
			item.style.color = '#2E7D32';
	}
});

// ----PRODUCT PAGE-------

// quantity input
jQuery(
	'<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>'
).insertAfter('.quantity input');
jQuery('.quantity').each(function() {
	var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

	btnUp.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue >= max) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue + 1;
		}
		spinner.find('input').val(newVal);
		spinner.find('input').trigger('change');
	});

	btnDown.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue <= min) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue - 1;
		}
		spinner.find('input').val(newVal);
		spinner.find('input').trigger('change');
	});
});

// ----SHOPPING CART PAGE-------
// redirect for pickup or delivery
const deliveryBtn = document.querySelector('#cart-delivery');
const pickupBtn = document.querySelector('#cart-pickup');
const radio = document.querySelector('#radio-disable');

deliveryBtn.addEventListener('click', () => {
	deliveryBtn.classList.add('active');
	pickupBtn.classList.remove('active');
});

pickupBtn.addEventListener('click', () => {
	pickupBtn.classList.add('active');
	deliveryBtn.classList.remove('active');
});
// disabling radio btton
window.addEventListener('DOMContentLoaded', () => {
	if (pickupBtn.classList.contains('active')) {
		radio.disabled = true;
	} else {
		radio.disabled = false;
	}

	if (radio.disabled === true) {
		radio.parentElement.classList.add('disabled-checkmark');
	} else {
		radio.classList.remove('disabled-checkmark');
	}
});

// ---pangination

// const prevBtn = document.querySelector('#pag-prev');
// const prevBtn = document.querySelector('#pag-prev');
