$(document).ready(function(mi){
	$(".desplazador").mThumbnailScroller({
		theme:"hover-classic"
	});
	
	console.log(mi);
});

$(document).ready(function(mo){
		var $grid = $('article').masonry({
		  itemSelector: '.este',
		  columnWidth: 250
		});
		// layout Isotope after each image loads
		$grid.imagesLoaded().progress( function() {
		  $grid.masonry();
		});  		

		console.log("listp");
});