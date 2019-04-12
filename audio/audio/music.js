
//ping
var pop_up_note_mode = true;
var note_id = 1;

var url = '';

function $$(name) {
	return document.getElementById(name);
}

function switchsound() {
	au = $$('audio');
	ai = $$('sound_image');
	if (au.paused) {
		au.play();
		ai.src = url+"/music_note_big.png";
		pop_up_note_mode = true;
		popup_note();
		$$("music_txt").innerHTML = "打开";
		$$("music_txt").style.visibility = "visible";
		setTimeout(function() {
			$$("music_txt").style.visibility = "hidden"
		}, 2500);
	} else {
		pop_up_note_mode = false;
		au.pause();
		ai.src = url+"/music_note_big.png";
		$$("music_txt").innerHTML = "关闭";
		$$("music_txt").style.visibility = "visible";
		setTimeout(function() {
			$$("music_txt").style.visibility = "hidden"
		}, 2500);
	}
}

function on_pop_note_end(event) {
	note = event.target;

	if (note.parentNode == $$("note_box")) {
		$$("note_box").removeChild(note);
	}
}

function popup_note() {
	box = $$("note_box");

	note = document.createElement("span");
	note.style.cssText = "visibility:visible;position:absolute;background-image:url('"+url+"/music_note_small.png');width:15px;height:25px";
	note.style.left = Math.random() * 20 + 20;
	note.style.top = "75px";
	this_node = "music_note_" + note_id;
	note.setAttribute("ID", this_node);
	note_id += 1;
	scale = Math.random() * 0.4 + 0.4;
	note.style.webkitTransform = "rotate(" + Math.floor(360 * Math.random()) + "deg) scale(" + scale + "," + scale + ")";
	note.style.webkitTransition = "top 2s ease-in, opacity 2s ease-in, left 2s ease-in";
	note.addEventListener("webkitTransitionEnd", on_pop_note_end);
	box.appendChild(note);

	setTimeout("document.getElementById('" + this_node + "').style.left = '0px';", 100);
	setTimeout("document.getElementById('" + this_node + "').style.top = '0px';", 100);
	setTimeout("document.getElementById('" + this_node + "').style.opacity = '0';", 100);

	if (pop_up_note_mode) {
		setTimeout("popup_note()", 600);
	}
}

function playbksound() {
	var audiocontainer = $$('audiocontainer');
	if (audiocontainer != undefined) {
		audiocontainer.innerHTML = '<audio id="bgsound" loop="loop" autoplay="autoplay"> <source src="' + gSound + '" /> </audio>';
	}

	var audio = $$('audio');
	audio.play();
	sound_div = document.createElement("div");
	sound_div.setAttribute("ID", "cardsound");
	sound_div.style.cssText = "position:fixed;right:20px;top:50px;z-index:50000;visibility:visible;";
	sound_div.onclick = switchsound;
	/*if (document.body.offsetWidth > 400) {
		bg_htm = "<img id='sound_image' src='images/music_note_big.png'>";
		box_htm = "<div id='note_box' style='height:100px;width:44px;position:absolute;left:-20px;top:-80px'></div>";
	} else {*/
		bg_htm = "<img id='sound_image' width='30px' src='"+url+"/music_note_big.png'>";
		box_htm = "<div id='note_box' style='height:100px;width:44px;position:absolute;left:-5px;top:-80px'></div>";
	/*}*/
	txt_htm = "<div id='music_txt' style='color:white;position:absolute;left:-30px;top:0px;width:60px;line-height:30px;font-size:10px'></div>"
	sound_div.innerHTML = bg_htm + box_htm + txt_htm;
	document.body.appendChild(sound_div);
	setTimeout("popup_note()", 100);
}


(function () {
	var AudioRun = window.AudioRun = function(options) {
		this.options = {
			url: ''
		};


		this.init(options);
	}	
	AudioRun.prototype = {
		init:function (options) {
			var str = options.url.split('?');

			url = this.options.url = str[0];

			playbksound();
		}

	}
})();