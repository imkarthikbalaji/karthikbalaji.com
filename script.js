
  var serviceHost = "https://spotify.karthikbalaji.workers.dev";

  var songData;

  function updatePlayer() {
    fetch(`${serviceHost}/get-now-playing`)
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty("ERROR")) {
          document.getElementById(
            "player-song"
          ).innerHTML = ``;
          document.getElementById("player-artist").innerHTML = "  ";
          return;
        }
        songData = data;
        document.getElementById("player-artist").innerHTML = '🎧 Listening to '+data.item.name + ' by '+data.item.artists[0].name;
        setTimeout(function() {
            location.reload();
          }, 180000);
      });
  }



  // Load player for the first time
  updatePlayer();
