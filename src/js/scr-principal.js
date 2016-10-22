$(document).ready(function(mi){
	$(".desplazador").mThumbnailScroller({
		theme:"hover-classic"
	});
	
	console.log(mi);
});

$(document).ready(function(mo){
		var $grid = $('artaicle').masonry({
		  itemSelector: '.brick',
		  columnWidth: '.item'
		});
// layout Isotope after each image loads
		$grid.imagesLoaded().progress( function() {
		  $grid.masonry();
		});  		

		console.log("listp");

		setInterval(reordenarcat, 333);
			function reordenarcat(){
				$grid.masonry();
		}
});