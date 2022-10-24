import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME = "videoplayer-current-time";


player.on("timeupdate", throttle(onTime, 1000));

function onTime(data) {
    localStorage.setItem(TIME, data.seconds);
}

const onPlay = function (data) {
    let savedTime = localStorage.getItem(TIME);
    if (data.seconds !== savedTime) {
        player.setCurrentTime(savedTime)
    } 

}

player.on('play', onPlay);







/*
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

player.on("timeupdate", throttle(onPlay, 1000));

setCurrentTime();

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

function setCurrentTime() {
  if (localStorage.getItem(CURRENT_TIME)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
  }
}*/