$(document).ready(function(){

		for(var i = 1; i <= 151; i++){
		$("#pokeImg").append("<img id=" + i + " src=http://pokeapi.co/media/img/" + i + ".png>");
		// console.log(i)
		}

	$("#pokeImg img").click(function(){
		var num = $(this).attr('id');
		console.log(num);

		$.get("http://pokeapi.co/api/v1/pokemon/" + num + "/", function(res){

			var string = "<h1>" + res.name + "</h1>";
			var string1 = "";
			string1 += "<h4>Types</h4>";
			string1 += "<ul>";

			for(var i = 0; i < res.types.length; i++){
				string1 += "<li>" + res.types[i].name + "</li>";
			}
			string1 += "</ul>";

			var string2 = "<h3> Height: " + res.height + "</h3>"
			var string3 = "<h3> Weight: " + res.weight + "</h3>"

			$("#pokeData").html(string + "<img src=http://pokeapi.co/media/img/" + num + ".png>" + string1 + string2 + string3);

			console.log(res)

		}, "json")
	})

});

