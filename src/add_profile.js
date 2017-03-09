$(document).ready(function(){
	$("#added_facebook_button").hide();
	$("#added_instagram_button").hide();
	$("#added_twitter_button").hide();
	$("#added_googleplus_button").hide();
	var x = 0;
	$("#facebook_submit").click(function(){
		x = 1;
		if (x == 1){
			$("#myModal").on("hidden.bs.modal", function () {
				$("#facebook_button").hide();
				$("#added_facebook_button").show();
			});
		}
	});
	$("#instagram_submit").click(function(){
		x = 1;
		if (x == 1){
			$("#instagram").on("hidden.bs.modal", function () {
				$("#instagram_button").hide();
				$("#added_instagram_button").show();
			});
		}
	});
	$("#twitter_submit").click(function(){
		x = 1;
		if (x == 1){
			$("#twitter").on("hidden.bs.modal", function () {
				$("#twitter_button").hide();
				$("#added_twitter_button").show();
			});
		}
	});
	$("#googleplus_submit").click(function(){
		x = 1;
		if (x == 1){
			$("#googleplus").on("hidden.bs.modal", function () {
				$("#googleplus_button").hide();
				$("#added_googleplus_button").show();
			});
		}
	});
	
});


