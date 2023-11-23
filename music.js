let progressBar = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");
// let playIcon = document.querySelector(".play");

let controlImg = document.querySelector(".play-pause-img")

let playPause = document.querySelector(".pause-play");

function pausePlay(){
  if(controlIcon.classList.contains("play")){
    song.play();
    controlIcon.classList.remove("play");
    controlIcon.classList.add("pause");
    controlImg.src = "images/icons8-pause-button-64.png";
  }
  else {
    song.pause();
    controlIcon.classList.remove("pause");
    controlIcon.classList.add("play");
    controlImg.src = "images/icons8-circled-play-64.png";
  }
}

song.onloadedmetadata = function() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
}

playPause.addEventListener("click", pausePlay);

