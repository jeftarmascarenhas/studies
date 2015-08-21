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
	minVolume = document.querySelector('.minVolume');

	playPause.addEventListener('click', playPauseAction, false);

	bar.addEventListener('click', progressInteractions, false);

	minVolume.addEventListener('click', volumeMin, false);


	
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
};

function progressInteractions (position) {
	if((myvideo.paused == false) && (myvideo.ended == false)){
		var ratonX = position.pageX - bar.offsetLeft;
		var newTime = ratonX * myvideo.duration /maximo;

		myvideo.currentTime = newTime;

		progress.style.width = ratonX+'px';
	}
};

function volumeMin () {
	myvideo.volume-=0.1;
}

window.addEventListener('load', init, false);