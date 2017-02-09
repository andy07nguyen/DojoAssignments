function priceRange (start, end, skip){
	for(var i = start; i < end; i += skip){
		console.log(i);
	}
}



priceRange(2, 10, 2);