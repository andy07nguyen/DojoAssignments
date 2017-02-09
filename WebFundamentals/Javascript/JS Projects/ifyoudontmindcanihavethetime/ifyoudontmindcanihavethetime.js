
function tellTime (){
  var HOUR = 8;
  var MINUTE = 50;
  var PERIOD = "AM";

  console.log("The current time is: " + HOUR + ":" + MINUTE + " " + PERIOD)

    if(MINUTE < 30){
      console.log("Just after 8")
    } else if(MINUTE > 30){
      console.log("Almost 9")
    }
    else {
      if(MINUTE == 50) {
        console.log("It's almost 9 in the morning")
      }
    }

    if(PERIOD == "AM"){
    	console.log("in the morning")
    }
    else {
    	if(PERIOD == "PM") {
    		console.log("in the evening")
    	}
    }
}

tellTime()
