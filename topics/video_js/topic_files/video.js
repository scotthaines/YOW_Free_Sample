// Get the video element with id="myVideo"
var vid = document.getElementById("vid_player");
var seekBar = document.getElementById("seek-bar");

// Assign an ontimeupdate event to the video element, and execute a
// function if the current playback position has changed.
vid.ontimeupdate = function() {ctrlDisplayUpdate()};

    var totalDurationPrint = "0";
	var durationLevel = "";
	var currentTimePrint = "0";

function calcTotalDuration() {
	var totalSeconds = vid.duration;
    var days           = Math.floor(totalSeconds / 24 / 60 / 60);
    var daysRemainderInSec  = Math.floor(totalSeconds - (days * 86400));

	var hours          = Math.floor(daysRemainderInSec / 3600);
    var hoursRemainderInSec = Math.floor(daysRemainderInSec - (hours * 3600));
	var hoursPrint	   = "";

	var minutes        = Math.floor(hoursRemainderInSec / 60);
    var minutesRemainderInSec = Math.floor(hoursRemainderInSec - (minutes * 60));
	var minutesPrint   = "";

	var seconds = minutesRemainderInSec;
	var secondsPrint   = "";

	if (days > 0 && hours < 10) {
		hoursPrint = "0" + hours;
	}
	else {
		hoursPrint = hours;
	}

	if (hours > 0 && minutes < 10) {
		minutesPrint = "0" + minutes;
	}
	else {
		minutesPrint = minutes;
	}

	if (minutes > 0 && seconds < 10) {
		secondsPrint = "0" + seconds;
	}
	else {
		secondsPrint = seconds;
	}

	if (days > 0) {
		durationLevel = "d";
		totalDurationPrint = days + ":" + hoursPrint + ":" + minutesPrint +
		":" + secondsPrint;
	} else if (hours > 0) {
		durationLevel = "h";
		totalDurationPrint = hoursPrint + ":" + minutesPrint + ":" +
		secondsPrint;
	} else if (minutes > 0) {
		durationLevel = "m";
		totalDurationPrint = minutesPrint + ":" + secondsPrint;
	} else {
		durationLevel = "s";
		totalDurationPrint = secondsPrint;
	}
}

function calcCurrentTime() {
	var curTotalSeconds = vid.currentTime;
    var curDays    = Math.floor(curTotalSeconds / 24 / 60 / 60);
    var curDaysRemainderInSec  = Math.floor(curTotalSeconds - (curDays * 86400));

	var curHours   = Math.floor(curDaysRemainderInSec / 3600);
    var curHoursRemainderInSec = Math.floor(curDaysRemainderInSec -
	(curHours * 3600));
	var curHoursPrint	   = "";

	var curMinutes = Math.floor(curHoursRemainderInSec / 60);
    var curMinutesRemainderInSec = Math.floor(curHoursRemainderInSec -
	(curMinutes * 60));
	var curMinutesPrint   = "";

	var curSeconds = curMinutesRemainderInSec;
	var curSecondsPrint   = "";

	if (durationLevel == "d" && curHours < 10) {
		curHoursPrint = "0" + curHours;
	}
	else {
		curHoursPrint = curHours;
	}

	if ((durationLevel == "d" || durationLevel == "h") && curMinutes < 10) {
		curMinutesPrint = "0" + curMinutes;
	}
	else {
		curMinutesPrint = curMinutes;
	}

	if ((durationLevel == "d" || durationLevel == "h" ||
	durationLevel == "m") && curSeconds < 10) {
		curSecondsPrint = "0" + curSeconds;
	}
	else {
		curSecondsPrint = curSeconds;
	}

	if (durationLevel == "d") {
		curTimePrint = days + ":" + curHoursPrint + ":" + curMinutesPrint +
		":" + curSecondsPrint;
	} else if (durationLevel == "h") {
		curTimePrint = curHoursPrint + ":" + curMinutesPrint + ":" +
		curSecondsPrint;
	} else if (durationLevel == "m") {
		curTimePrint = curMinutesPrint + ":" + curSecondsPrint;
	} else {
		curTimePrint = curSecondsPrint;
	}
}

function ctrlDisplayUpdate() {
// Display the current volume of the video in a p element with id="timePosition"
//    document.getElementById("volumenumber").innerHTML = '&numsp;' + vid.volume * 100 + '&percnt;';

    // Display mute button per the current mute state.
    vidmuteUpdate();

    calcTotalDuration();
    calcCurrentTime();

// Display the current position of the video in a p element with id="timePosition"
    if (Math.floor(vid.currentTime) < 10) {
	   document.getElementById("timePosition").innerHTML = '&nbsp;' + '&numsp;' + curTimePrint + ' | ' + totalDurationPrint;
	}
	else {
	   document.getElementById("timePosition").innerHTML = '&nbsp;' + curTimePrint + ' | ' + totalDurationPrint;
	}
									  
//    document.getElementById("timePosition").innerHTML = vid.duration;
}

function initPlayer(){
    // Set object references
    mutebtn = document.getElementById("mutebtn");
    mutebtn.style.width = "68px";
//    mutebtn.style.background = '#4CAF50'; /* Green */
//    mutebtn.innerHTML = '<img src="../../css/images/details_open_and_close.png" />';
    volumeslider = document.getElementById("volumeslider");
    fullscreenbtn = document.getElementById("fullscreenbtn");
	var volume100Scale = Math.floor(vid.volume * 100);
    document.getElementById("volumenumber").innerHTML = volume100Scale + '&percnt;';
    ctrlDisplayUpdate();

	// Add event listeners
    mutebtn.addEventListener("click",vidmute,false);
    volumeslider.addEventListener("change",setvolume,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
}
window.onload = initPlayer;

function vidmuteUpdate(){
    mutebtn.style.width = "68px";
	if(vid.muted){
		mutebtn.innerHTML = "Unmute";
	} else {
		mutebtn.innerHTML = "Mute";
	}
}

function vidmute(){
    mutebtn.style.width = "68px";
	if(vid.muted){
		vid.muted = false;
		mutebtn.innerHTML = "Mute";
	} else {
		vid.muted = true;
		mutebtn.innerHTML = "Unmute";
	}
}

function setvolume(){
	vid.volume = volumeslider.value / 100;
	var volume100Scale = Math.floor(vid.volume * 100);
	if (volume100Scale < 10) {
	   volume100Scale = "&numsp;" + "&numsp;" + volume100Scale;
	}
	else {
		if (volume100Scale < 100) {
		   volume100Scale = "&numsp;" + volume100Scale;
		}
	}
    document.getElementById("volumenumber").innerHTML = volume100Scale + '&percnt;';
}

function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}

// Event listener for the seek bar
seekBar.addEventListener("change", function() {
  // Calculate the new time
  var time = vid.duration * (seekBar.value / 100);

  // Update the video time
  vid.currentTime = time;
});

// Update the seek bar as the video plays
vid.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / vid.duration) * vid.currentTime;

  // Update the slider value
  seekBar.value = value;
});

// Pause the video when the slider handle is being dragged
seekBar.addEventListener("mousedown", function() {
  vid.pause();
});

// Play the video when the slider handle is dropped
seekBar.addEventListener("mouseup", function() {
//  vid.play();
  vid.pause();
});

