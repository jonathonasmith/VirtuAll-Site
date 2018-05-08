$(document).ready(function() {

	$(function(){ $("body").niceScroll(); });
	$('#nav1').click(function(e) { 
		$('#nav1').attr('class','active');
		$('#nav2').attr('class','inactive');
		$('#nav3').attr('class','inactive');
		$('#nav4').attr('class','inactive');
	});
	$('#nav2').click(function(e) { 
		$('#nav2').attr('class','active');
		$('#nav1').attr('class','inactive');
		$('#nav3').attr('class','inactive');
		$('#nav4').attr('class','inactive');
	});
	$('#nav3').click(function(e) { 
		$('#nav3').attr('class','active');
		$('#nav1').attr('class','inactive');
		$('#nav2').attr('class','inactive');
		$('#nav4').attr('class','inactive');
	});
	$('#nav4').click(function(e) { 
		$('#nav4').attr('class','active');
		$('#nav1').attr('class','inactive');
		$('#nav2').attr('class','inactive');
		$('#nav3').attr('class','inactive');
	});

});