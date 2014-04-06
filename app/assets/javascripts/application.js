// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

	function loadVideo(){
		var videoArray = ['HgEoCmHeAsc','DDJENFzOQl8'];
		var html='';
		for(i=0;i<videoArray.length;i++){

			html = html + '<div class="video"> <iframe id="ytplayer" type="text/html" width="80%" height="360" src="https://www.youtube.com/embed/' 
			+ videoArray[i] + '"frameborder="0" allowfullscreen></iframe></div>'; 
		
		}

		document.getElementById("videoList").innerHTML = html;
	}