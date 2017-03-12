var _ = {
   map: function(array, callback) {
     for(var i = 0; i < array.length; i++){
       array[i] = callback(array[i]);
     }
     return array
   },
   reduce: function(array, callback, memo) {
     var idx = 0; // idx is like count
     if(!memo){ // memo is like sum
       memo = array[0];
       idx = 1;
     }
     for(var i = idx; i < array.length; i++){
       memo = callback(array[i], memo);
     }
     return memo;
   },
   find: function(array, callback) {
     for(var i = 0; i < array.length; i++){
       if(callback(array[i])){
        //  console.log(array[i])
         return array[i]
       }
     }
   },
   filter: function(array, callback) {
     var newArr = []
     for(var i = 0; i < array.length; i++){
       if(callback(array[i])){
        //  console.log(array[i])
        newArr.push(array[i])
       }
     }
     return newArr
   },
   reject: function(array, callback) {
     var newArr = []
     for(var i = 0; i < array.length; i++){
       if(!callback(array[i])){
        //  console.log(array[i])
        newArr.push(array[i])
       }
     }
     return newArr
   }
 }


// you just created a library with 5 methods!
var array = [4,5,6,1,3,15];
console.log(_.map(array, function callback(x){return x * 2}));
console.log(_.reduce(array, function callback(x, memo){return x + memo;}, 0));
console.log(_.find(array, function(num){ return num % 2 == 0; }));
console.log(_.filter(array, function callback(num){return num % 2 == 0}));
console.log(_.reject(array, function callback(num){return num % 2 == 0}));
