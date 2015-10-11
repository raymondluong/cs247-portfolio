$(document).on('ready', function(){
	$('.tile-img').on('click', function(e){
		var url = e.currentTarget.id;
	    window.open(url, '_blank');
	});
	$('.tile').on('mouseover', function() {
		$('.tile').not(this).addClass('tile-fade');
	});
	$('.tile').on('mouseout', function() {
		$('.tile').not(this).removeClass('tile-fade');
	});

});