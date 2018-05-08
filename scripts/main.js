$(document).ready(function() {

	$(function(){ $("body").niceScroll(); });
	$('#nav1').click(function(e) { 
		$('#nav1').attr('class','active');
		$('#nav2').attr('class','inactive');
		$('#nav3').attr('class','inactive');
		$('#nav4').attr('class','inactive');
		$('html, body').animate({ scrollTop: $("#about1").offset().top-90 }, 1000);
	});
	$('#nav2').click(function(e) { 
		$('#nav2').attr('class','active');
		$('#nav1').attr('class','inactive');
		$('#nav3').attr('class','inactive');
		$('#nav4').attr('class','inactive');
		$('html, body').animate({ scrollTop: $("#about2").offset().top-90 }, 1000);
	});
	$('#nav3').click(function(e) { 
		$('#nav3').attr('class','active');
		$('#nav1').attr('class','inactive');
		$('#nav2').attr('class','inactive');
		$('#nav4').attr('class','inactive');
		$('html, body').animate({ scrollTop: $("#about3").offset().top-90 }, 1000);
	});
	$('#nav4').click(function(e) { 
		$('#nav4').attr('class','active');
		$('#nav1').attr('class','inactive');
		$('#nav2').attr('class','inactive');
		$('#nav3').attr('class','inactive');
		$('html, body').animate({ scrollTop: $("#about4").offset().top-90 }, 1000);
	});

});