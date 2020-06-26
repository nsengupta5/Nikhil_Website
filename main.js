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
});