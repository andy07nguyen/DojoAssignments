$(document).ready(function(){
	$('.img1').click(function(){
		// console.log('hello world');
		$.get('http://anapioficeandfire.com/api/houses/1', function(res){
			console.log(res.name)
			var house = "<h3>" + res.name + "</h3>";
			$('.box2').html(house);
		}, 'json');
	})


	$('.img2').click(function(){
		// console.log('hello world');
		$.get('http://anapioficeandfire.com/api/houses/2', function(res){
			console.log(res.name)
			var house = "<h3>" + res.name + "</h3>";
			$('.box2').html(house);
		}, 'json');
	})


	$('.img3').click(function(){
		// console.log('hello world');
		$.get('http://anapioficeandfire.com/api/houses/4', function(res){
			console.log(res.name)
			var house = "<h3>" + res.name + "</h3>";
			$('.box2').html(house);
		}, 'json');
	})


	$('.img4').click(function(){
		// console.log('hello world');
		$.get('http://anapioficeandfire.com/api/houses/5', function(res){
			console.log(res.name)
			var house = "<h3>" + res.name + "</h3>";
			$('.box2').html(house);
		}, 'json');
	})
	
});

