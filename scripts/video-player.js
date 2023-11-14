const video = document.getElementById("myVideo");
const btnPlay = document.getElementById("play");
const btnMute = document.getElementById("mute");
const musicName = document.querySelector(".video_title");
const actor = document.querySelector(".video_text")
const playlist = ['video1', 'video2', 'video3', 'video4'];
const playname = ['Bob','Naruto','Shaman King','Energy'];
const playactor = ['Bob y Patrik','Naruto','King','Engineer'];
let number = 0;

function play() {
	if (video.paused){
		video.play();
		btnPlay.innerHTML = "PAUSE";
	} else {
		video.pause();
		btnPlay.innerHTML = "PLAY"
	}
}

function mute() {
	if (video.muted){
		video.muted = false
		btnMute.innerHTML = "MUTE"
	} else {
		video.muted = true
		btnMute.innerHTML = "UNMUTE"
	}
}

function next() {
	if (number <playlist.length - 1) {
		number++;
	} else {
		number = 0
	}
	video.src = `video/${playlist[number]}.mp4`;
	musicName/innerHTML = playname[number];
	actor.innerHTML = playactor[number];
}


function prev() {
	if (number !=0) {
		number--;
	} else {
		number = playlist.length - 1;
	}
	video.src = `video/${playlist[number]}.mp4`;
	musicName/innerHTML = playname[number];
	actor.innerHTML = playactor[number];
}








