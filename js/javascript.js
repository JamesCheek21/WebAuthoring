$(document).ready(function(){
	$('#icon').click(function(e){
		e.preventDefault();
		$('body').toggleClass('with--sidebar');
	});
	$('#site-cache').click(function(e){
		$('body').removeClass('with--sidebar');
	});
});
var index = 0;
$(function(){
	slideshow();
});
function slideshow() {
		var i;
		var slides = document.getElementsByClassName("slides");
		for (i = 0; i < slides.length; i++) {
			 slides[i].style.display = "none";
		}
		index++;
		if (index > slides.length) {index = 1}
		slides[index-1].style.display = "block";
		setTimeout(slideshow, 3000); // Change image every 2 seconds
}
function showHoodies()
{
	document.getElementById('hoodies').style.display = "block";
	document.getElementById('hats').style.display = "none";
	document.getElementById('accessories').style.display = "none";
	document.getElementById('skate').style.display = "none";
	document.getElementById('show').style.display = "block";
}
function showHats()
{
	document.getElementById('hoodies').style.display = "none";
	document.getElementById('hats').style.display = "block";
	document.getElementById('accessories').style.display = "none";
	document.getElementById('skate').style.display = "none";
	document.getElementById('show').style.display = "block";
}
function showAccess()
{
	document.getElementById('hats').style.display = "none";
	document.getElementById('hoodies').style.display = "none";
	document.getElementById('accessories').style.display = "block";
	document.getElementById('skate').style.display = "none";
	document.getElementById('show').style.display = "block";
}
function showSkate()
{
	document.getElementById('hats').style.display = "none";
	document.getElementById('accessories').style.display = "none";
	document.getElementById('hoodies').style.display = "none";
	document.getElementById('skate').style.display = "block";
	document.getElementById('show').style.display = "block";
}
function showAll()
{
	document.getElementById('hats').style.display = "block";
	document.getElementById('accessories').style.display = "block";
	document.getElementById('hoodies').style.display = "block";
	document.getElementById('skate').style.display = "block";
	document.getElementById('show').style.display = "none";
}
