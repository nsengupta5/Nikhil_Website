$(document).ready(function() {
	$("#aboutMeButton").click(function() {
		$("#mePanel").slideToggle("slow");
	});

	$("#myHobbiesButton").click(function() {
		$("#hobbiesPanel").slideToggle("slow");
	});

	$("#myResumeButton").click(function() {
		$("#resumePanel").slideToggle("slow");
	});

	$("#byteClubButton").click(function() {
		$("#bytePanel").slideToggle("slow");
	});

	$("#aboutmenav").click(function () {
		$("#mePanel").slideDown("slow");
	});

	$("#hobbiesnav").click(function () {
		$("#hobbiesPanel").slideDown("slow");
	});

	$("#resumenav").click(function () {
		$("#resumePanel").slideDown("slow");
	});

	$("#byteclubnav").click(function () {
		$("#bytePanel").slideDown("slow");
	});
});