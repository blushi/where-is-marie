// pull in desired CSS/SASS files
require( './styles/main.scss' );
var $ = jQuery = require( '../../node_modules/jquery/dist/jquery.js' );           // <--- remove if jQuery not needed
require( '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js' );   // <--- remove if Bootstrap's JS not needed

// inject bundled Elm app into div#main
var Elm = require( '../elm/Main' );
Elm.Main.embed( document.getElementById( 'main' ) );

  function loadPlayer(i, videoId) {
    console.log(i)
      return new YT.Player(i.toString(), {
        videoId: videoId, // YouTube Video ID
        width: 280,               // Player width (in px)
        height: 158,              // Player height (in px)
        playerVars: {
          enablejsapi: 1,
          version: 3,
          start: i === 3 ? 4550 : 20,
          vq: 'medium', // Video quality
          autoplay: 1,        // Auto-play the video on load
          controls: 0,        // Hide pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          //loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 0         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {
            if (i !== 3) {
              e.target.mute();
            }
          },
        }
      });
    }

    function playVideo(videoIds) {
      var that = this;
      var players = [];
      if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
        window.onYouTubePlayerAPIReady = function() {
          for (var i = 0; i < 12; i++) {
            players.push(loadPlayer(i, videoIds[i]));
          }
        };
        $.getScript('//www.youtube.com/player_api');
      } else {
        for (var i = 0; i < 12; i++) {
          players.push(loadPlayer(i, videoIds[i]));
        }
      }
    };

var videoIds = [
  '_UYEOeyRm4E',
  'aieq0NGnN3Q',
  'z-mcFtyQbBo',
  'Rc8837-V4p8', //
  'G8V2OP5WYA0',
  'JmuR2zwVSDY',
  'oSsLsnsJ-5I',
  'bFuFztxbH4A',
  '5jKFERytBn4',
  'BEuRUuML1mU',
  'U2pI89icJbs',
  'zwQjoRyg6q0',
  'oSsLsnsJ-5I'
];

var players = playVideo(videoIds);
