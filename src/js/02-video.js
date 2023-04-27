import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', updateTime);

function updateTime() {
  player.getCurrentTime(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
