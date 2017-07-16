      $(document).ready(function(){
		  
		$(document).on('scroll', function (e) { updateColor(); });
		  
		  function updateColor() {
		      var o = $(document).scrollTop() / 30;
		      if (o > 1.000) {
		          $("nav").removeClass("transparent-nav");
		          $("nav").addClass("common-light-background");
                  $("nav").addClass("z-depth-5");
		          $("nav").removeClass("z-depth-0");
                  $("#main-logo").removeClass("white-text");
		          $("#main-logo").addClass("logo-text-color");

		      } else {
		          $("nav").removeClass("common-light-background");
		          $("nav").addClass("transparent-nav");
                  $("nav").addClass("z-depth-0");
		          $("nav").removeClass("z-depth-5");
                  $("#main-logo").removeClass("logo-text-color");
		          $("#main-logo").addClass("white-text");

		      }
		  }  

		  
		$('.videocarousel').carousel();
        // $('.videocarousel').carousel({fullWidth: true});
        window.setInterval(function(){$('.videocarousel').carousel('next')},10000)
		
        $('#teamCarousel').carousel();
        $('#teamCarousel.carousel-slider').carousel({fullWidth: false});
        window.setInterval(function(){$('#teamCarousel').carousel('next')},3000);
			  
      });
	  
        function onYouTubeIframeAPIReady() 
        {
            var player;

            player = new YT.Player('muteYouTubeVideoPlayer1', 
            {
                videoId: 'Q1rhoq77dcY', // YouTube Video ID
                playerVars: {
                autoplay : 1,        // Auto-play the video on load
                controls : 0,        // Show pause/play buttons in player
                showinfo : 0,        // Hide the video title
                modestbranding : 1,  // Hide the Youtube Logo
                loop : 1,            // Run the video in a loop
                fs : 1,              // Hide the full screen button
                cc_load_policy : 1, // Hide closed captions
                iv_load_policy : 1,
                disablekb : 1,
                autohide : 1,
                iv_load_policy : 3,
                rel : 0 
                },
                events: 
                {
                onReady: function(e) 
                        {
                            e.target.mute();
                            vidRescale(player);
                        }
                }
            });

            player2 = new YT.Player('muteYouTubeVideoPlayer2', 
            {
                videoId: '5gF4tyf-zVo', // YouTube Video ID
                playerVars: {
                autoplay : 1,        // Auto-play the video on load
                controls : 0,        // Show pause/play buttons in player
                showinfo : 0,        // Hide the video title
                modestbranding : 1,  // Hide the Youtube Logo
                loop : 1,            // Run the video in a loop
                fs : 1,              // Hide the full screen button
                cc_load_policy : 1, // Hide closed captions
                iv_load_policy : 1,
                disablekb : 1,
                autohide : 1,
                iv_load_policy : 3,
                rel : 0 
                },
                events: 
                {
                onReady: function(e) 
                        {
                            e.target.mute();
                            vidRescale(player2);
                        }
                }
            });

            player3 = new YT.Player('muteYouTubeVideoPlayer3', 
            {
                videoId: 'ftPOy4yUGMQ', // YouTube Video ID
                 playerVars: {
                autoplay : 1,        // Auto-play the video on load
                controls : 0,        // Show pause/play buttons in player
                showinfo : 0,        // Hide the video title
                modestbranding : 1,  // Hide the Youtube Logo
                loop : 1,            // Run the video in a loop
                fs : 1,              // Hide the full screen button
                cc_load_policy : 1, // Hide closed captions
                iv_load_policy : 1,
                disablekb : 1,
                autohide : 1,
                iv_load_policy : 3,
                rel : 0 
                },
                events: 
                {
                onReady: function(e) 
                        {
                            e.target.mute();
                            vidRescale(player3);
                        }
                }
            });            
        }	
	  
	  function vidRescale(player)
        {
            var w = $(window).width()+200,
            h = $(window).height()+200;
            if (w/h > 16/9)
            {
                player.setSize(w, w/16*9);
            }
            else 
            {
                player.setSize(h/9*16, h);
            }
        }
	
	$(document).ready(function(){
		$('.right-arrow').click(function(){
			$('.carousel').carousel('next');
		});	
		$('.left-arrow').click(function(){
			$('.carousel').carousel('prev');
		});		
		
		setTimeout(function(){ 
			$('.left-arrow, .right-arrow').css('display','block');
		}, 15000);

	});	
