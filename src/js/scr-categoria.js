$(document).ready(function(){
		var $grid = $('#categoria').masonry({
		  itemSelector: '.it-cat',
		  columnWidth:'.it-cat',
		  percentPosition: true
		});
		$grid.imagesLoaded().progress( function() {
		  $grid.masonry();
		});  

		setInterval(reordenarcat, 333);
		function reordenarcat(){
			$grid.masonry();
		}
});

