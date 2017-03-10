$(document).ready(function(){
	//alert("You selected some text!");
	$('.report-image').hide();
	$('#monthId').on('click',function(){
		console.log('Inside');
		
	});
});

function showReportGraph(){
	$('.report-image').show();
}