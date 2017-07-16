      $(document).ready(function(){
		  
		$('.videocarousel').carousel();
        // $('.videocarousel').carousel({fullWidth: true});
        window.setInterval(function(){$('.videocarousel').carousel('next')},30000)
		
        $('#teamCarousel').carousel();
        $('#teamCarousel.carousel-slider').carousel({fullWidth: true});
        window.setInterval(function(){$('#teamCarousel.carousel-slider').carousel('next')},3000);	  
		  
		$(document).on('scroll', function (e) { updateColor(); });
		  
		  function updateColor() {
		      var o = $(document).scrollTop() / 30;
		      if (o > 1.000) {
		          $("nav").removeClass("transparent-nav");
		          $("nav").addClass("white-nav");
		          $("#main-logo").removeClass("white-text");
		          $("#main-logo").addClass("black-text");

		      } else {
		          $("nav").removeClass("white-nav");
		          $("nav").addClass("transparent-nav");
		          $("#main-logo").removeClass("black-text");
		          $("#main-logo").addClass("white-text");

		      }
		  }	
	  
            function onYouTubeIframeAPIReady() {
                var player;

                player = new YT.Player('muteYouTubeVideoPlayer1', {
                    videoId: 'Q1rhoq77dcY', // YouTube Video ID
                    playerVars: {
                        autoplay: 1, // Auto-play the video on load
                        controls: 0, // Show pause/play buttons in player
                        showinfo: 0, // Hide the video title
                        modestbranding: 1, // Hide the Youtube Logo
                        loop: 1, // Run the video in a loop
                        fs: 1, // Hide the full screen button
                        cc_load_policy: 1, // Hide closed captions
                        iv_load_policy: 1, // Hide the Video Annotations
                        autohide: 1 // Hide video controls when playing
                    },
                    events: {
                        onReady: function(e) {
                            e.target.mute();
                            vidRescale(player);
                        }
                    }
                });

                player2 = new YT.Player('muteYouTubeVideoPlayer2', {
                    videoId: '5gF4tyf-zVo', // YouTube Video ID
                    playerVars: {
                        autoplay: 1, // Auto-play the video on load
                        controls: 0, // Show pause/play buttons in player
                        showinfo: 0, // Hide the video title
                        modestbranding: 1, // Hide the Youtube Logo
                        loop: 1, // Run the video in a loop
                        fs: 1, // Hide the full screen button
                        cc_load_policy: 1, // Hide closed captions
                        iv_load_policy: 1, // Hide the Video Annotations
                        autohide: 1 // Hide video controls when playing
                    },
                    events: {
                        onReady: function(e) {
                            e.target.mute();
                            vidRescale(player2);
                        }
                    }
                });

                player3 = new YT.Player('muteYouTubeVideoPlayer3', {
                    videoId: 'ftPOy4yUGMQ', // YouTube Video ID
                    playerVars: {
                        autoplay: 1, // Auto-play the video on load
                        controls: 0, // Show pause/play buttons in player
                        showinfo: 0, // Hide the video title
                        modestbranding: 1, // Hide the Youtube Logo
                        loop: 1, // Run the video in a loop
                        fs: 1, // Hide the full screen button
                        cc_load_policy: 1, // Hide closed captions
                        iv_load_policy: 1, // Hide the Video Annotations
                        autohide: 1 // Hide video controls when playing
                    },
                    events: {
                        onReady: function(e) {
                            e.target.mute();
                            vidRescale(player3);
                        }
                    }
                });
            }
		  
	  function vidRescale(player) {
	      var w = $(window).width() + 200,
	          h = $(window).height() + 200;
	      if (w / h > 16 / 9) {
	          player.setSize(w, w / 16 * 9);
	      } else {
	          player.setSize(h / 9 * 16, h);
	      }
	  }
	
	  });	  