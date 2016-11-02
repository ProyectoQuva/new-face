function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

/*scroll*/
jQuery(document).ready(scroll);

function scroll($){
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
	console.log(scroll);
}

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
		$(scroll);
	});
	$('#bot-buscador').click(function(){
		nav = 1;
	    $(vovenav);
		$(scroll);
	});
	$('#bot-contacto').click(function(){
		nav = 2;
	    $(vovenav);
		$(scroll);
	});
	$('#bot-info').click(function(){
		nav = 3;
	    $(vovenav);
		$(scroll);
	});
/*ALTURA DEL article*/
$(document).ready(altoart);

	function altoart(){
		var alto_art = $(".desplazador").height();
		$('.desplazador article').height(alto_art);
	} 
setInterval(altoart, 100);
