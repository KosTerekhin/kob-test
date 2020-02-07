//youtube script
var tag = document.createElement('script');
tag.src = '//www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1;
var player2;
// HISTORY
onYouTubeIframeAPIReady = function() {
	// history page
	player1 = new YT.Player('historypage-video', {
		height: '244',
		width: '434',
		videoId: '9hTInP_Nc5U', // VIDEO ID FROM YOUTUBE
		playerVars: {
			autoplay: 0,
			rel: 0,
			showinfo: 0,
			autohide: 1
		},
		events: {
			onStateChange: onPlayerStateChange
		}
	});

	// product page video #1
	player2 = new YT.Player('productpage1-video', {
		height: '244',
		width: '434',
		videoId: '9hTInP_Nc5U', // VIDEO ID FROM YOUTUBE
		playerVars: {
			autoplay: 0,
			rel: 0,
			showinfo: 0,
			autohide: 1
		},
		events: {
			onStateChange: onPlayerStateChange
		}
	});

	// product page video # 2
	player3 = new YT.Player('productpage2-video', {
		height: '244',
		width: '434',
		videoId: '9hTInP_Nc5U', // VIDEO ID FROM YOUTUBE
		playerVars: {
			autoplay: 0,
			rel: 0,
			showinfo: 0,
			autohide: 1
		},
		events: {
			onStateChange: onPlayerStateChange
		}
	});
};

onPlayerStateChange = function(event) {
	if (event.data == YT.PlayerState.ENDED) {
		$('#historypage-play-btn').fadeIn('normal');
	}

	if (event.data == YT.PlayerState.ENDED) {
		$('#productpage1-play-btn').fadeIn('normal');
	}

	if (event.data == YT.PlayerState.ENDED) {
		$('#productpage2-play-btn').fadeIn('normal');
	}
};
// HISTORY PAGE
$(document).on('click', '#historypage-play-btn', function() {
	console.log(player1);
	$(this).fadeOut('normal');
	player1.playVideo();
});

// PRODUCT PAGE
$(document).on('click', '#productpage1-play-btn', function() {
	$(this).fadeOut('normal');
	player2.playVideo();
});

$(document).on('click', '#productpage2-play-btn', function() {
	$(this).fadeOut('normal');
	player3.playVideo();
});
