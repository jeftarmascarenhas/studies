var myvideo
  , playPause
  , bar
  , progress
  , maximo = 600
  ;




function init() {
	
	myvideo = document.querySelector('.myvideo');
	progress = document.querySelector('.progress');
	bar = document.querySelector('.bar');
	playPause = document.querySelector('.play-pause');

	playPause.addEventListener('click', playPauseAction, false);

	// progress.addEventListener('click', progressInteractions, false);
	
};


function playPauseAction () {
	if((myvideo.paused == false) && (myvideo.ended == false)){

		myvideo.pause();
		playPause.innerHTML = 'Pause';

	}
	else{
		myvideo.play();
		playPause.innerHTML = 'Play';

		bucle = setInterval(states, 30);

	}

};

function states () {
	if(myvideo.ended == false){
		var total = parseInt(myvideo.currentTime*maximo/myvideo.duration);
		progress.style.width = total+'px';
	}
}

window.addEventListener('load', init, false);