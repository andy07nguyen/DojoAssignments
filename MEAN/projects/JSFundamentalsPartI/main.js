var x = [3,5,"Dojo", "rocks", "Michael", "Sensei", newarray = ["hello", "world", "JavaScript is Fun"]];
//1:
// for(var i = 0; i < x.length; i++){
//   console.log(x[i])
// }

//2:
// function add(){
//   x.push(100);
//   console.log(x)
// }
// add()

//3:
// console.log(x)

//4:
// function sumup(){
//   sum = 0;
//   for(var i = 2; i < 500; i++){
//       sum = sum + i
//   }
//   console.log(sum)
// }
// sumup()

//5:
// var array = [1, 5, 90, 25, -3, 0];
//
// function minimum(array){
//   min = 0;
//   for(var i = 0; i < array.length; i++){
//     if(min > array[i]){
//       min = min + array[i];
//     }
//   }
//     console.log(min)
// }
// minimum(array)

//6:
// var array = [1, 5, 90, 25, -3, 0];
//
// function avg(array){
//   sum = 0;
//   for(var i = 0; i < array.length; i++){
//     sum = sum + array[i];
//   }
//   console.log(sum / array.length)
// }
// avg(array)

//7:
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja){
  console.log(key + ": " + newNinja[key])
}
