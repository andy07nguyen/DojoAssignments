$(document).ready(function(){
	
	$('#button1').click(function(){
		console.log('world');
	})

	$('#button2').click(function(){
		$('#hide').hide('slow');
	})

	$('#button3').click(function(){
		$('p.colorP').show('slow');
	})

	$('#button4').click(function(){
		$('p.toggleP').toggle();
	})

	$('#button5').click(function(){
		$('div.slideDown').slideDown('slow');
	})

	$('#button6').click(function(){
		$('div.slideUp').slideUp('slow');
	})

	$('#button7').click(function(){
		$('div.slideToggle').slideToggle('slow');
	})

	$('#button8').click(function(){
		$('div.fadeIn').fadeIn('slow');
	})

	$('#button9').click(function(){
		$('div.fadeOut').fadeOut('slow');
	})

	$('#button10').click(function(){
		$('p.addClass').addClass('selected');
	})

	$('#button11').click(function(){
		$('p.beforeP').before('<b>My name is</b>');
	})

	$('#button12').click(function(){
		$('p.afterP').after('<b>My name is<b>');
	})

	$('#button13').click(function(){
		$('p.appendP').append('<strong>Hello World<strong>');
	})

	$('#button14').click(function(){
		$('p.htmlP').html('whatsup!!!!');
	})

	$('#button15').click(function(){
		$('img.attrImg').attr('id', 'coolpic');
	})

	$('#input16').keyup(function(){
		var text = $(this).val();
		$('p.valP').text(text);
	})
	.keyup();


	$('#button17').click(function(){
		$('p.textP').text('Hello World');
	})

	$('')
	$('#button18').click(function(){
		$('div.dataDiv').data('test', {name: 'andy', age: 26});
		$('p.displayText1').text($('div.dataDiv').data('test').name);
		$('p.displayText2').text($('div.dataDiv').data('test').age);
	})


});

