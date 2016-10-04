<!----------------VISUALBOX DE IMAGENES------------>
<div class="visualbox" style="display:hidden;">
	<div id="cerrar-visual" class="bot-cerrar icon-close"></div>
	
	<div class="img animate" style="background-image:url(http://);"></div><!--en el background va la imagen principal-->
	<div class="thumbs flex al-center">
		<div id="my-thumbs-list" class="content">
		  <ul>
		  	<!--EL SIGUIENTE A SE REPITE X LA CANTIDAD DE IMAGENES QUE TENGA LA NOTICIA
		  	TENÉS QUE PONER EL ENLACE DE CADA IMAGEN EN EL HREF DEL A Y EN EL BACKGROUND DEL LI-->
		    <a href=""><li class="thumb" style="background-image:url(http://)"></li></a>
		  </ul>
		</div>
	</div>
</div>

<!----------------FONDO DESENFOCADO---------------->
<div class="blur">
	<!--EN EL SIGUIENTE SPAN TENÉS QUE PONER LA URL DE LA IMAGEN PRINCIPAL EN EL BACKGROUND-->
	<span style="background-image:url(http://);"></span>
</div>

<!---------------CUERPO DE NOTA-------------------->
<div class="cont" id="notacuerpo">
	<!----------------ENCABEZADO---------------->
	<div class="col-bas8 col-med12 encabezado bloque">
			<time>{FECHA}</time>
			<h2>{TITULO}</h2>
			<b>{BAJADA</b> 
	</div>
	<!----------------IMAGENES---------------->
	<div class="col-bas4 col-med12 imagenes bloque">
		<!--VA LA URL DE LA IMAGEN PRINCIPAL EN EL BACKGROUND-->
		<div id="abrir-visual" class="img" style="background-image:url(http://);"></div>
		<div class="thumbs flex al-between">
			<!--EL A SE REPITE POR CADA IMAGEN QUE TENGA LA NOTA, LA URL VA DOS VECES: EN EL HREF DEL A Y EN EL BACKGROUND DEL DIV DE ADENTRO-->
			<a href="{URL-IMAGEN}" rel="miimg">
				<div class="thumb"  style="background-image:url({URL-IMAGEN})"></div>
			</a>
		</div>
	</div>
	<!----------------CUERPO TEXTUAL---------------->
	<div class="col-bas8 col-med12 cuerpo bloque">
		{AQUI VA METIDO EL CUERPO DE LA NOTA}
	</div>
	<!----------------PIE DE NOTA---------------->
	<div class="col-bas8 col-med12 pie bloque">
		<i>¿Qué te pareció la nota?<span class="icon-navigate_before"></span></i>
		<div class="minif cont">
			<div class="wx6 fil flex al-start">
				<span class="icon-thumb_up"></span>
				<p>{CANTIDAD DE ME-GUSTA}</p>
			</div>
			<div class="wx6 fil flex al-end">
				<p>{CANTIDAD DE NO-ME-GUSTA}</p>
				<span class="icon-thumb_down"></span>
			</div>
		</div>
	</div>
	<!----------------ETIQUETAS---------------->
	<div class="col-bas4 col-med12 etiquetas flex bloque">
		<i>Etiquetas de esta nota:<span class="icon-navigate_before"></span></i>
		<div class="minif">
			<!--EL SIGUIENTE SPAN SE REPITE SEGUN LA CANTIDAD DE ETIQUETAS DE LA NOTA-->
			<span class="etiqueta">{NOMBRE DE LA ETIQUETA}</span> 
		</div>
	</div>
	<!----------------RELACIONADAS---------------->
	<div class="col-bas4 col-med12 relacionadas flex bloque">
		<i>Noticias relacionadas:<span class="icon-navigate_before"></span></i>
		<div class="minif">
			<!--EL SIGUIENTE DIV SE REPITE 5 VECES CON LAS NOTAS RELACIONADAS-->
			<div class="item item-rel">
				<h5>{TITULO DE LA NOTICIA RELACIONADA}</h5>
				<p>{BAJADA DE LA NOTICIA RELACIONADA}</p>
			</div>
		</div>
	</div>
	<!----------------COMENTARIOS---------------->
	<div class="col-bas8 col-med12 comentarios bloque">
		<i>Dejá tu comentario:<span class="icon-navigate_before"></span></i>
		<div class="minif">
			<div class="opciones fil">
				<div class="wx6 com-local">Mediante Vo-Ve</div>
				<div class="wx6 com-face">Mediante Facebook</div>
				<div class="wx12">
					<sub>Términos y condiciones de publicación</sub>
				</div>
			</div>
			<!-------Comentarios vía vove-------->
			<div class="local">
				<div class="comentar">
					<form action="">
						<input type="text" placeholder="Tu nombre:">
						<input type="text" placeholder="Tu e-mail:">
						<textarea name="comentario" id="" cols="30" rows="4" placeholder="Tu comentario"></textarea>
						<input type="submit" value="enviar">
					</form>
				</div>
				<div class="cantidad">({AQUI VA LA CANTIDAD DE COMENTARIOS QUE TENGA LA NOTA}) Comentarios</div>
				<div class="comentados">
					<!--EL SIGUIENTE DIV CON CLASE "coment fil" SE REPITE SEGUN LOS COMENTARIOS-->
					<div class="coment fil">
						<div class="data">
							<span class="icon-speech-bubble"></span>
							{FECHA Y HORA DEL COMENTARIO}
						</div>
						<p><b>{NOMBRE DEL COMENTADOR}</b>{CUERPO DEL COMENTARIO}</p>
					</div>
				</div>
			</div>
			<!-------Comentarios vía facebook-------->
			<div class="facebook">
				<div id="fb-root"></div>
				<script>(function(d, s, id) {
				  var js, fjs = d.getElementsByTagName(s)[0];
				  if (d.getElementById(id)) return;
				  js = d.createElement(s); js.id = id;
				  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7";
				  fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));</script>

				<div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="100%" data-numposts="3"></div>
			</div>
		</div>
	</div>	
</div>

<!----------------BOTON PARA SUBIR---------------->
<div class="ir-arriba icon-skip-back"></div>
<!----------------CAJA DE COMPARTIR---------------->
<div class="sharebox">
	<div class="bot-share icon-share"></div>

	<div class="share-cont" id="share">
		<div class="top">
			<div id="backshare" class="icon-arrow_back"></div>
			<div class="title">compartir</div>
			<div class="cerrar-share icon-cross"></div>
		</div>		
		<div class="share-options">
			<div class="redes">
				<p>Copia el siguiente enlace:</p>
				<input type="text" value="{LA URL ACTUAL DE LA NOTICIA}">

				<p>Elige el medio para compartir:</p>
				<div class="flex al-between">
					<a class="icon-facebook" href="https://www.facebook.com/sharer/sharer.php?u={LA URL DE LA NOTA}"></a>
					<a class="icon-twitter" href="https://twitter.com/intent/tweet?url={LA URL DE LA NOTA}"></a>
					<a class="icon-google-plus" href="https://plus.google.com/share?url={LA URL DE LA NOTA}"></a>
					<a class="icon-pinterest" href=""></a>
					<a class="icon-mail" id="sharemail"></a>
				</div>
			</div>
			<div class="correo">
				<p>Envía esta nota a un correo</p>
				<form action="">
					<input type="text" name="remitente" placeholder="De:">
					<input type="text" name="destinatario" placeholder="Para:">
					<input type="submit" value="Enviar">
				</form>
			</div>
		</div>
	</div>
</div>


