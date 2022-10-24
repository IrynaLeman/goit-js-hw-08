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




