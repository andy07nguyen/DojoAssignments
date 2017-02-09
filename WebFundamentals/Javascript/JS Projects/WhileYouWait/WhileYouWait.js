
function birthday (){
	var daysUntilMyBirthday = 60;

	for(var i = daysUntilMyBirthday; i > 0; i = i - 1){

		if(i > 30) {
			console.log(i + "days until my birthday. Such a long time...")
		} else if(i > 5) {
			console.log(i + "DAYS UNTIL MY BIRTHDAY YAY!!!")
		} else if(i <= 5){
			console.log(i + "DAYS UNTIL MY BIRTHDAY!!!")
		} 
	}
}




birthday()

