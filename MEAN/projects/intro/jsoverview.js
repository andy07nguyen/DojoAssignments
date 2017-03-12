var myarr = [1,5,25,125,42]

// for (var index in myarr){
//   console.log(myarr[index]*5);
// }

for (var i = 0; i < myarr.length; i++){
  console.log(myarr[1]*5);
  console.log("the right ways");
}

var myobject = {
  language: "Javascript",
  dojo: "Washington DC",
  favorite_instructor: "Minh, no wait Dan AAAaaaaaaah"
}

for (var key in myobject){
  console.log(key, myobject[key] + " the value")
}
