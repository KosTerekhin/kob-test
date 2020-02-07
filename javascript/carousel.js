// OTZIVI CAROUSEL
$(document).ready(function() {
	$('#otzivi-carousel').owlCarousel();
});

var owl = $('#otzivi-carousel');
owl.owlCarousel({
	// autoplay
	items: 2,
	loop: true,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: true,
	nav: true,
	margin: 10,

	// dots each
	dotsEach: true,
	// mobile version
	responsive: {
		0: {
			items: 1,
			margin: 0
		},
		900: {
			items: 2
		}
	}
});
// mouse wheel
owl.on('mousewheel', '.owl-stage', function(e) {
	if (e.deltaY > 0) {
		owl.trigger('next.owl');
	} else {
		owl.trigger('prev.owl');
	}
	e.preventDefault();
});

// top CAROUSEL
$(document).ready(function() {
	$('#top-carousel').owlCarousel();
});

var owl = $('#top-carousel');
owl.owlCarousel({
	// autoplay
	items: 1,
	loop: true,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: true,
	nav: true,

	// dots each
	dotsEach: true
});

// BRANDS CAROUSEL
$(document).ready(function() {
	$('#brands-carousel').owlCarousel();
});

var owl = $('#brands-carousel');
owl.owlCarousel({
	// autoplay
	items: 1,
	loop: true,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: true,
	nav: true,

	// dots each
	dotsEach: true
});

// BLOG CAROUSEL
$(document).ready(function() {
	$('#blog-carousel').owlCarousel();
});

var owl = $('#blog-carousel');
owl.owlCarousel({
	// autoplay
	items: 1,
	loop: true,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: true,
	nav: true,

	// dots each
	dotsEach: true
});

// novinki CAROUSEL
$(document).ready(function() {
	$('#novinki-carousel').owlCarousel();
});

var owl = $('#novinki-carousel');
owl.owlCarousel({
	// autoplay
	items: 1,
	loop: true,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: true,
	nav: true,

	// dots each
	dotsEach: true
});

// footer CAROUSEL
$(document).ready(function() {
	$('#footer-carousel').owlCarousel();
});

var owl = $('#footer-carousel');
owl.owlCarousel({
	// autoplay
	items: 1,
	loop: true,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: true,
	nav: true,

	// dots each
	dotsEach: true
});

// CATALOG PAGE
// mobile products
$(document).ready(function() {
	$('#products-carousel').owlCarousel();
});

var owl = $('#products-carousel');
owl.owlCarousel({
	// autoplay
	items: 2,
	loop: true,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: true,
	nav: true,

	// dots each
	dotsEach: true,
	responsive: {
		0: {
			items: 1,
			margin: 0
		},
		420: {
			items: 2
		},
		600: {
			items: 3
		}
	}
});

// bottom catalog
var owl = $('#catalog-bottom-carousel');
owl.owlCarousel({
	// autoplay
	items: 4,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: false,
	nav: true,

	// dots each
	dotsEach: false,
	// mobile
	responsive: {
		0: {
			items: 1
		},
		420: {
			items: 2
		},
		880: {
			items: 3
		},
		1401: {
			items: 4
		}
	}
});

// removing border in catalog carousel

// window.addEventListener('click', () => {
// 	const activeList = Array.prototype.slice.call(document.querySelectorAll('.active'));
// 	activeList.forEach((active, index) => {
// 		if (active.classList.contains('owl-item')) {
// 			active.childNodes[0].style.borderRight = '0.930107px solid #DBDBDB';
// 			if (index == 1) {
// 				active.childNodes[0].style.borderLeft = 'none';
// 			}
// 			if (index == 4) {
// 				active.childNodes[0].style.borderRight = 'none';
// 			}
// 		}
// 	});
// });
// window.addEventListener('mouseup', () => {
// 	const activeList = Array.prototype.slice.call(document.querySelectorAll('.active'));
// 	activeList.forEach((active, index) => {
// 		if (active.classList.contains('owl-item')) {
// 			active.childNodes[0].style.borderRight = '0.930107px solid #DBDBDB';
// 			if (index == 1) {
// 				active.childNodes[0].style.borderLeft = 'none';
// 			}

// 			if (index == 4) {
// 				active.childNodes[0].style.borderRight = 'none';
// 			}
// 		}
// 	});
// });

// -----HISTORY PAGE---------
// mobile products
$(document).ready(function() {
	$('#history-carousel').owlCarousel();
});

var owl = $('#history-carousel');
owl.owlCarousel({
	// autoplay
	items: 3,
	loop: true,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: true,
	nav: true,

	// dots each
	dotsEach: true,
	responsive: {
		0: {
			items: 1,
			margin: 0
		},
		420: {
			items: 2
		},
		600: {
			items: 3
		}
	}
});

// -----PRODUCT PAGE ------
// horizontal-carousel
$(document).ready(function() {
	$('#product-horizontal-carousel').owlCarousel();
});
var owl = $('#product-horizontal-carousel');
owl.owlCarousel({
	items: 3,
	loop: false,
	mouseDrag: false,
	touchDrag: false,
	pullDrag: false,
	rewind: true,
	autoplay: false,
	autoWidth: true,
	margin: 8.3,
	nav: true,
	responsive: {
		0: {
			items: 2,
			autoWidth: false
		},
		376: {
			item: 3,
			autoWidth: false
		},
		767: {
			autoWidth: true
		}
	}
});
// change image on click

const display = document.querySelector('#carousel-display');
const carouselClickItem = Array.prototype.slice.call(document.querySelectorAll('#click-carousel'));

carouselClickItem.forEach((item) => {
	item.addEventListener('click', () => {
		const image = item.getAttribute('src');

		display.style.backgroundImage = `url(${image})`;
	});
});

$(document).ready(() => {
	const image = Array.prototype.slice.call(document.querySelectorAll('#click-carousel'))[0].getAttribute('src');

	display.style.backgroundImage = `url(${image})`;
});

// tovari carousel
$(document).ready(function() {
	$('#product-tovari-carousel').owlCarousel();
});
var owl = $('#product-tovari-carousel');
owl.owlCarousel({
	// autoplay
	items: 4,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: false,
	nav: true,

	// dots each
	dotsEach: false,
	// mobile
	responsive: {
		0: {
			items: 1
		},
		420: {
			items: 2
		},
		600: {
			items: 3
		},
		800: {
			items: 4
		}
	}
});

// prosmotr
$(document).ready(function() {
	$('#product-prosmotr-carousel').owlCarousel();
});
var owl = $('#product-prosmotr-carousel');
owl.owlCarousel({
	// autoplay
	items: 4,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: false,
	nav: true,

	// dots each
	dotsEach: false,
	// mobile
	responsive: {
		0: {
			items: 1
		},
		420: {
			items: 2
		},
		600: {
			items: 3
		},
		800: {
			items: 4
		}
	}
});

// blog page 3 items carousel
$(document).ready(function() {
	$('#blogpage-carousel-1').owlCarousel();
});
var owl = $('#blogpage-carousel-1');
owl.owlCarousel({
	// autoplay
	items: 3,
	margin: 44,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: false,
	nav: true,

	// dots each
	dotsEach: false,
	// mobile
	responsive: {
		0: {
			items: 1,
			margin: 5
		},
		425: {
			items: 1,
			margin: 5
		},
		600: {
			items: 2
		},
		900: {
			items: 3,
			margin: 20
		},
		1024: {
			margin: 44
		}
	}
});
$(document).ready(function() {
	$('#blogpage-carousel-2').owlCarousel();
});
var owl = $('#blogpage-carousel-2');
owl.owlCarousel({
	// autoplay
	items: 3,
	margin: 44,
	autoplay: false,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	// mouse scroll
	loop: false,
	nav: true,

	// dots each
	dotsEach: false,
	// mobile
	responsive: {
		0: {
			items: 1,
			margin: 5
		},
		425: {
			items: 1,
			margin: 5
		},
		600: {
			items: 2
		},
		900: {
			items: 3,
			margin: 20
		},
		1024: {
			margin: 44
		}
	}
});
