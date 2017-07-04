$(document).ready(function(){
	var dibujarGifs = function(data){
		var gif="";
		var url="";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url= element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif,url));
		});
	}
	//aca solo armaremos la estructura que se mostrará en html, co los datos que hemos solicitado anteriormente
		var armarTemplate = function(gif,url){
			var t = "<div class='elemento'><img src='"+gif + "'/><a href='" + url + "'>ver más</a></div>"
			return t;
		}
		var ajaxGif= function(gif){
			$.ajax({
				url: 'http://api.giphy.com/v1/gifs/search',
				type: 'GET',
				datatype: 'json',
				data: {
					q : gif,
					api_key: 'dc6zaTOxFJmzC'
				}
			})
			.done(function(response){
				console.log(response);
				dibujarGifs(response.data);
			})
			.fail(function(){
				console.log("error");
			})
		}
		$("#buscar-gif").click(function(event){
			console.log("entro");
			$("#elementos").empty();
			var gif = $("#gif-text").val();
			ajaxGif(gif);
		});
});

/*
Hacemos un recorrido con nuestra data, donde le pediremos que nos imprima las imagenes que correspondan a la palagra ingresada en el
input que creamos en html.Además , que añada un enlace a la pagina web donde se encuentra la imagen
 */