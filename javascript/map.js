function initMap() {
	const icon = {
		url: '/styles/layout/footer/images/location.png',
		labelOrigin: new google.maps.Point(55, 195)
	};
	let latLng = new google.maps.LatLng(46.47593, 30.74266);

	let mapOptions = {
		center: latLng,
		zoom: 19,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
			{
				featureType: 'administrative',
				elementType: 'all',
				stylers: [
					{
						saturation: '-100'
					}
				]
			},
			{
				featureType: 'administrative.province',
				elementType: 'all',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'landscape',
				elementType: 'all',
				stylers: [
					{
						saturation: -100
					},
					{
						lightness: 65
					},
					{
						visibility: 'on'
					}
				]
			},
			{
				featureType: 'poi',
				elementType: 'all',
				stylers: [
					{
						saturation: -100
					},
					{
						lightness: '50'
					},
					{
						visibility: 'simplified'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'all',
				stylers: [
					{
						saturation: '-100'
					}
				]
			},
			{
				featureType: 'road.highway',
				elementType: 'all',
				stylers: [
					{
						visibility: 'simplified'
					}
				]
			},
			{
				featureType: 'road.arterial',
				elementType: 'all',
				stylers: [
					{
						lightness: '30'
					}
				]
			},
			{
				featureType: 'road.local',
				elementType: 'all',
				stylers: [
					{
						lightness: '40'
					}
				]
			},
			{
				featureType: 'transit',
				elementType: 'all',
				stylers: [
					{
						saturation: -100
					},
					{
						visibility: 'simplified'
					}
				]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [
					{
						hue: '#ffff00'
					},
					{
						lightness: -25
					},
					{
						saturation: -97
					}
				]
			},
			{
				featureType: 'water',
				elementType: 'labels',
				stylers: [
					{
						lightness: -25
					},
					{
						saturation: -100
					}
				]
			}
		]
	};
	this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	addMarker(new google.maps.LatLng(46.475896, 30.741522), icon);

	function changeMarker() {
		const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		let latLng;

		if (width < 1201) {
			latLng = new google.maps.LatLng(46.47593, 30.7424);
			map.setCenter(latLng);
			console.log('<1200');
		}

		if (width < 901) {
			latLng = new google.maps.LatLng(46.47645, 30.741482);
			map.setCenter(latLng);
		}
	}

	changeMarker();
	window.onresize = changeMarker;
}

function addMarker(position, icon) {
	markerLabel = 'Украина, Одесса, ул.Пушкинская, 40';

	let marker = new google.maps.Marker({
		map: this.map,
		animation: google.maps.Animation.DROP,
		position: position,
		icon: icon,
		label: {
			color: 'black',
			fontWeight: 'bold',
			fontSize: '30px',
			fontStyle: 'normal',
			fontWeight: 'bold',
			lineHeight: '38px'
		}
	});

	var infowindow = new SnazzyInfoWindow({
		marker: marker,
		placement: 'bottom',
		content: '<div class="my-custom-class-for-label"> Украина, Одесса, ул.Пушкинская, 40 </div>'
	});

	infowindow.open();
}

initMap();
