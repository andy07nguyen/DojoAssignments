// var newArray = numbersOnly([1, "apples", -3, "orange", 0.5])

function numbers(arr){
	var newarr = []

	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] === "number"){
			newarr.push(arr[i])
		}
	} 			
	return newarr
}

numbers()


