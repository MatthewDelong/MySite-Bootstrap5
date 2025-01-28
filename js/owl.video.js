$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:1,
    merge:false,
    loop:true,
    margin:10,
    autoWidth: true,
    video:true,
    videoWidth:300,
    videoHeight:200,
    lazyLoad:false,
    center:true,
    autoplay: false, // Disable Owl Carousel's autoplay
    responsive:{
        480:{
            items:1,
            dots: true,
            nav: false,
        },
        600:{
            items:3,
            dots: true,
            nav: true,
        }},
    
   
    onChanged: function (event) {
      // Pause all videos when the carousel changes
      pauseAllVideos();
      // Play the current video
      playCurrentVideo(event.item.index);
    },
  });
});

let players = []; // Array to store YouTube player instances

// Function to initialize YouTube players
function onYouTubeIframeAPIReady() {
  $(".item-video").each(function (index) {
    const videoId = $(this).find("div").data("video-id");
    players[index] = new YT.Player(`player${index + 1}`, {
      height: "200",
      width: "300",
      videoId: videoId,
      events: {
        onReady: onPlayerReady,
      },
    });
  });
}

// Function to play the current video
function playCurrentVideo(index) {
  if (players[index]) {
    players[index].playVideo();
  }
}

// Function to pause all videos
function pauseAllVideos() {
  players.forEach((player) => {
    if (player && player.pauseVideo) {
      player.pauseVideo();
    }
  });
}

// Function to handle when a player is ready
function onPlayerReady(event) {
  // Optional: Do something when the player is ready
}

/*$('.owl-carousel').owlCarousel({

    items:1,
    merge:false,
    loop:true,
    margin:10,
    autoWidth: true,
    video:true,
    videoWidth:300,
    videoHeight:200,
    lazyLoad:false,
    center:true,
    responsive:{
        480:{
            items:1,
            dots: true,
            nav: false,
        },
        600:{
            items:3,
            dots: true,
            nav: true,
        }
    }
})*/
