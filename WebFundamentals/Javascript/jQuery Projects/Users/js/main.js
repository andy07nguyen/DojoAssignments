$(document).ready(function(){
	// $('h4').click(function(){
	// 	console.log('world');
	// })

	$('#button').click(function(){
		$('#tr1').append('<td>' + $('#input1').val() + '</td>');
	})

	$('#button').click(function(){
		$('#tr1').append('<td>' + $('#input2').val() + '</td>');
	})

	$('#button').click(function(){
		$('#tr1').append('<td>' + $('#input3').val() + '</td>');
	})

	$('#button').click(function(){
		$('#tr1').append('<td>' + $('#input4').val() + '</td>');
	})
});

