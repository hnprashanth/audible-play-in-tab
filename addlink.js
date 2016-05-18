$(document).ready(function(){
	$(".adbl-cloud-player-load").each(function() {
	  var asin = $(this).attr("data-asin");
	  var href = "/cloud-player?ref_=a_lib_cp_1&asin="+asin;
	  $(this).parent().html("<a href='"+href+"' target='blank'><span class='library-sample-play'></span><span class='library-sample-text'>PLAY</span></a>");
	});
});