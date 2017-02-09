$(document).ready(function(){
	$('form').submit(function(){
		var city = $('input').val();
		$('.cityName').html(city);
		// console.log(city);

		$.get('http://api.openweathermap.org/data/2.5/weather?q=id=' + city + '&APPID=c39054f1fef0bac2fd9c5a7baec4e07f', function(res){
			var kelvinTemp = res.main.temp
			var fTemp = Math.round(kelvinTemp - 273.15) * 9/5 + 32;
			$('.cityTemp').html(fTemp);
			// console.log(res);
			// console.log(res.main.temp);
			// console.log(fTemp);
		}, 'json');

		return false;
	})
});
