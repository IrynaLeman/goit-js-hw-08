import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME = 'videoplayer-current-time';

const onPlay = function (data) {
  const currentTime = localStorage.setItem(TIME, data.seconds);

  // data is an object containing properties specific to that event
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(TIME) || 0); 