$(document).ready(function(){
	
	$('h4').click(function(){
		console.log('world');
	})

	$('img').click(function(){
		$(this).hide('slow');
	})

	$('button').click(function(){
		$('img').show('slow');
	})

	
	
});

