$(document).ready(function(mo){
		var $grid = $('#notacuerpo').masonry({
		  itemSelector: '.brick',
		  columnWidth: '.col-bas4'
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

/*VISUALBOX*/
$(document).ready(visualbox);
	var visual = 0;
	function visualbox(){
			
			if(visual==0){
				$('.visualbox .animate').removeClass('pulse').fadeOut('slow',function(){
					$('.visualbox').fadeOut('slow');
				}); 
			}
			else if(visual==1){
				$('.visualbox').fadeIn('slow',function(){
					$('.visualbox .animate').addClass('pulse').fadeIn('slow');
				}); 
			}}
	
	$('#abrir-visual').click(function(){
		visual = 1;
		$(visualbox);});
	$('#cerrar-visual').click(function(){
		visual = 0;
		$(visualbox);});


/*ALTURA DEL DIV NOTAS*/
$(document).ready(altoblur);

	function altoblur(){
		var alto_blur = $(".encabezado").height();
		$('.blur').height(alto_blur+40);
		$('.imagenes.none').height(alto_blur+40);

		var alto_before = $("section.nota .imagenes .img").height();
		$('section.nota .imagenes .img:before').height(alto_before);
	} 
setInterval(altoblur, 100);

/*thumbnail*/
(function($){
    $(window).load(function(){
        $("#my-thumbs-list").mThumbnailScroller({
			type:"click-50",
			theme:"buttons-in"
        });

        console.log('thumbok');
    });
})(jQuery);

/*Cambiar el fondo del img*/
$(".thumbs a").load(function(){
	var elthumb = $(this).attr("href");
	var elthumb2 = 'url('+elthumb+')';
	$(this).children('.thumb').css({'background-image': elthumb2 });
});
/**/
$(document).ready(function(){
		var elthumb = $(".thumbs a").attr("href");
		var elthumb2 = 'url('+elthumb+')';
		$(this).children('.thumb').css({'background-image': elthumb2 });
});
/************/

$(".thumbs a").click(function(){
	var laimagen = $(this).attr("href");
	var laimagen2 = 'url('+laimagen+')';
	$('#abrir-visual').css({'background-image': laimagen2 });
	$('.visualbox .img').css({'background-image': laimagen2 });
	return false;
});

/*MINIMIZAR PARTES DE UNA NOTA*/
$(document).ready(function(){
	$(".brick i").click(function(){
		$(this).siblings('.minif').slideToggle('slow');

		$(this).children('span').each(function() {
	    
		    displaying = $(this).css("overflow");
		    
		    if(displaying == "visible") {
		       $(this).css("overflow","hidden").addClass('sshow').removeClass('shide');
		    } else {
		       $(this).css("overflow","visible").addClass('shide').removeClass('sshow');
		    }
	  	});

	});
});

///TAMAÑO DE FUENTE

$(document).ready(function(mm){
  
  // Donde queremos cambiar el tamaÃ±o de la fuente
  var donde = $('section.nota .cuerpo p');
  var sizeFuenteOriginal = donde.css('font-size');
  
  // Aumentar Font Size
  $(".textmas").click(function(){
  	var sizeFuenteActual = donde.css('font-size');
 	var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
    var sizeFuenteNuevo = sizeFuenteActualNum*1.1;
	donde.css('font-size', sizeFuenteNuevo);
	alert(sizeFuenteOriginal);
	return false;
  });
 
  // Disminuir Font Size
  $(".textmen").click(function(){
  	var sizeFuenteActual = donde.css('font-size');
 	var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
    var sizeFuenteNuevo = sizeFuenteActualNum*0.9;
	donde.css('font-size', sizeFuenteNuevo);
	return false;
  });
  
  console.log(mm);
});
/*LIKES*/
$('.pie .icon-thumb_up').click(function(){
	$(this).addClass('active');
	$('.pie .icon-thumb_down').removeClass('active');
});
$('.pie .icon-thumb_down').click(function(){
	$(this).addClass('active');
	$('.pie .icon-thumb_up').removeClass('active');
});


/*COMENTARIOS*/
$(document).ready(vercomentarios);
var varvercom = 0;

	function vercomentarios(){
		if(varvercom == 0){
			$('.comentarios .local').show('fast');
			$('.comentarios .facebook').hide('fast');
			$('.com-local').addClass('active');
			$('.com-face').removeClass('active');
		}
		else if(varvercom == 1){
			$('.comentarios .local').hide('fast');
			$('.comentarios .facebook').show('fast');
			$('.com-face').addClass('active');
			$('.com-local').removeClass('active');		
		}
	}

$('.com-local').click(function(){
	varvercom = 0;
	$(vercomentarios);
});
$('.com-face').click(function(){
	varvercom = 1;
	$(vercomentarios);
});

/*SHAREBOX*/
$(document).ready(sharebox);
var varshare = 0;
	function sharebox(){
		if(varshare == 0){
			$('.share-cont').hide('slow');
			$('.bot-share').show('fast');
		}
		else if(varshare == 1){
			$('.share-cont').show('slow');
			$('.bot-share').hide('fast');
		}
	}

$('.bot-share').click(function(){
	varshare = 1;
	$(sharebox);
});
$('.cerrar-share').click(function(){
	varshare = 0; 
	$(sharebox);
});
/*Opciones de compartir*/
$(document).ready(shareopt);

var varshareopt = 0;

function shareopt(){
	if (varshareopt == 0){	
		$('.redes').show('fast');
		$('.correo').hide('fast');
		$('#backshare').fadeOut('fast');
	}
	else if (varshareopt == 1){
		$('.redes').hide('fast');
		$('.correo').show('fast');
		$('#backshare').fadeIn('fast');
	}
}

$('#sharemail').click(function(){
	varshareopt = 1;
	$(shareopt);
});
$('#backshare').click(function(){
	varshareopt = 0;
	$(shareopt);
});
/*IR ARRIBA*/
$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('section').animate({
			scrollTop: '0px'
		}, 400);
	});
 
	$('section').scroll(function(){
		if( $(this).scrollTop() > 800 ){
			$('.ir-arriba').fadeIn(300);
		} else {
			$('.ir-arriba').fadeOut(300);
		}
	});
});