$(document).ready(function () {
  var audioElement;
  $(".app-container").on("click", ".load-meditation", function () {
    $(".load-meditation").hide();
    $(".meditation-wrapper").append(
      '<div class="meditation-orb off" onclick="play()"> <div class="meditation-info"> <div class="breath-type">Loading...</div> <div class="timer"><i class="fas fa-spinner"></i></div> <div class="lyric" style="display: none;"></div> <div id="length"></div> <div id="source"></div> <div id="status"></div> <div id="currentTime"></div> </div> </div>'
    );
    audioElement = document.getElementById('player');
    audioElement.src = "./audio/cudi-meditation-hum_1.ogg"
    console.log("tahaha");
    var breathInLength = 4;
    var breathOutLength = 5.7;
    var breathCountArray = [0];
    var curBreathIndex = 0;

    audioElement.addEventListener(
      "ended",
      function () {
        this.play();
      },
      false
    );

    audioElement.addEventListener("canplay", function () {
      var curCount = 0;
      while (curCount < audioElement.duration) {
        if (
          breathCountArray[breathCountArray.length - 1] === 0 ||
          breathCountArray[breathCountArray.length - 1] % 9.7 <= 0.2
        ) {
          var numToPush =
            breathCountArray[breathCountArray.length - 1] + breathInLength;
          breathCountArray.push(numToPush);
          curCount = breathCountArray[breathCountArray.length - 1];
        } else {
          var numToPush =
            breathCountArray[breathCountArray.length - 1] + breathOutLength;
          breathCountArray.push(numToPush);
          curCount = breathCountArray[breathCountArray.length - 1];
        }
      }
      $(".timer").html('<i class="fas fa-play"></i>');
      $(".breath-type").text("Click to begin");
      $("#length").text("Duration:" + audioElement.duration + " seconds");
      $("#source").text("Source:" + audioElement.src);
      $("#status").text("Status: Ready to play").css("color", "green");
    });

    audioElement.addEventListener("timeupdate", function () {
      $("#currentTime").text("Current second:" + audioElement.currentTime);
      console.log(curBreathIndex);
      console.log(audioElement.currentTime);
      if (
        audioElement.currentTime >= breathCountArray[curBreathIndex] &&
        audioElement.currentTime < breathCountArray[curBreathIndex + 1]
      ) {
        if (curBreathIndex === 0 || curBreathIndex % 2 === 0) {
          $(".timer").text("IN");
          $(".breath-type").text("Breathe");
          $(".lyric").text('"eee-yo-wa oowee-yer-ron ooo–"');
        } else {
          $(".timer").text("OUT");
          $(".breath-type").text("Breathe");
          $(".lyric").text('"–wee ohh-wa ooOH eayo-eaoh"');
        }
      } else {
        curBreathIndex = curBreathIndex + 1;
      }
    });

    function isPlaying(audelem) {
      return !audelem.paused;
    }

    $(".app-container").on("click", ".meditation-orb", function () {
      if (isPlaying(audioElement)) {
        audioElement.pause();
        audioElement.currentTime = 0;
        curBreathIndex = 0;
        $(this).removeClass("on");
        $(this).addClass("off");
        $(".timer").html('<i class="fas fa-play"></i>');
        $(".breath-type").text("Click to begin");
        $(".lyric").hide();
      } else {
        audioElement.play();
        $("#status").text("Status: Playing");
        $(this).removeClass("off");
        $(this).addClass("on");
        $(".timer").html("IN");
        $(".breath-type").text("Breathe");
        $(".lyric").show();
        $(".lyric").text('"eee-yo-wa oowee-yer-ron ooo–"');
      }
    });
  });
});
