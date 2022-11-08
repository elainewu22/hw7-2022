var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.load()
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false
	console.log("auto play is set to" + video.autoplay)
	console.log("loop is set to" + video.autoplay)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down video");
	video.playbackRate *=.90
	console.log("speed is", video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up the video");
	video.playbackRate /=.90
	console.log("speed is", video.playbackRate)

})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip ahead");
	video.currentTime += 10
	
})
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == true){
		console.log("Unmute")
		video.muted = false
		this.innerHTML = "mute"
	}
	else{
		console.log("muted")
		video.muted = true
		this.innerHTML = "Unmute"
		
	}

});	// change the text of the button from mute to unmute and vice versa

document.querySelector("#slider").addEventListener("click", function(){
	console.log("volume slide")
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	console.log(video.volume)

});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("vintage")
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("back to original")
	video.classList.remove("oldSchool");
});

//function playVid(){
	//video.play();
//}