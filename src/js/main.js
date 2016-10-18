function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

/*scroll*/
jQuery(document).ready(function($){
$('nav').niceScroll({
		scrollspeed: 60,
		mousescrollstep: 40,
		cursorwidth: 3,
		cursorheight: 130,
		cursorborder: 1,
		cursorcolor: 'rgba(255,255,255,0.2)',
		cursorborderradius: 0,
		styler:"fb",
		autohidemode: false,
		horizrailenabled: false
	});
		}
);
jQuery(document).ready(function($){
$('#mensaje').niceScroll({
		scrollspeed: 60,
		mousescrollstep: 40,
		cursorwidth: 3,
		cursorheight: 130,
		cursorborder: 1,
		cursorcolor: 'rgba(255,255,255,0.2)',
		cursorborderradius: 0,
		styler:"fb",
		autohidemode: false,
		horizrailenabled: false
	});
		}
);
/*NAV*/
$(document).ready(vovenav);

	var nav = 0;
	function vovenav(){
		if(nav==0){
			$('#menu').show('slow');
			$('#buscador, #contacto, #info').hide('fast');
	
			$('#bot-menu').animate({'opacity':'1'}).css({'border-bottom':'solid 3px #C4C4C4'});
			$('#bot-buscador, #bot-contacto, #bot-info').animate({'opacity':'0.4'}).css({'border-bottom':'solid 3px transparent'});
		}
		else if(nav==1){
			$('#buscador').show('slow');
			$('#menu, #contacto, #info').hide('fast');

			$('#bot-buscador').animate({'opacity':'1'}).css({'border-bottom':'solid 3px #C4C4C4'});
			$('#bot-menu, #bot-contacto, #bot-info').animate({'opacity':'0.4'}).css({'border-bottom':'solid 3px transparent'});
		}
		else if(nav==2){
			$('#contacto').show('slow');
			$('#buscador, #menu, #info').hide('fast');

			$('#bot-contacto').animate({'opacity':'1'}).css({'border-bottom':'solid 3px #C4C4C4'});
			$('#bot-buscador, #bot-menu, #bot-info').animate({'opacity':'0.4'}).css({'border-bottom':'solid 3px transparent'});
		}
		else if(nav==3){
			$('#info').show('slow');
			$('#buscador, #contacto, #menu').hide('fast');

			$('#bot-info').animate({'opacity':'1'}).css({'border-bottom':'solid 3px #C4C4C4'});
			$('#bot-buscador, #bot-contacto, #bot-menu').animate({'opacity':'0.4'}).css({'border-bottom':'solid 3px transparent'});
		}		
	}

	$('#bot-menu').click(function(){
		nav = 0;
		$(vovenav);
	});
	$('#bot-buscador').click(function(){
		nav = 1;
	    $(vovenav);
	});
	$('#bot-contacto').click(function(){
		nav = 2;
	    $(vovenav);
	});
	$('#bot-info').click(function(){
		nav = 3;
	    $(vovenav);
	});
/*ALTURA DEL article*/
$(document).ready(altoart);

	function altoart(){
		var alto_art = $(".desplazador").height();
		$('.desplazador article').height(alto_art);
	} 
setInterval(altoart, 100);
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


(function($){
    $(window).load(function(){
        $("#my-thumbs-list").mThumbnailScroller({
			type:"click-50",
			theme:"buttons-in"
        });
    });
})(jQuery);

(function($){
	$(window).load(function(){

		$(".desplazador").mThumbnailScroller({
			theme:"hover-classic"
		});
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

/*MINIMIZAR PARTES DE UNA NOTA*/
$(document).ready(function(){
	$(".bloque i").click(function(){
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