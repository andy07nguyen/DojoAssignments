


$(document).ready(function(){
	$('h4').click(function(){
		console.log('world');
	})


	$("button").click(function(){
		$.get("http://pokeapi.co/api/v2/", function(){
			for(var i=1;i<=151;i++){
			$("#pokeImg").append("<img src="+"'http://pokeapi.co/media/img/"+i+".png'"+">");
			console.log("Pokemon ID: " + i);
		}
		})
	})



});

