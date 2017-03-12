// var x = [3,5,"Dojo", "rocks", "Michael", "Sensei", newarray = ["hello", "world", "JavaScript is Fun"]];
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
// var newNinja = {
//  name: 'Jessica',
//  profession: 'coder',
//  favorite_language: 'JavaScript', //like that's even a question!
//  dojo: 'Dallas'
// }
//
// for (var key in newNinja){
//   console.log(key + ": " + newNinja[key])
// }

//PART2:
//1:
// function sum(){
//   var sum = 0;
//   for(var i = 1; i < 500; i++){
//     sum = sum + i
//   }
//   console.log(sum)
// }
// sum()

//2:
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
//
// //3:
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

// var person = {
//   name: "andy",
//   distance_traveled: 0,
//   say_name: function(){
//     console.log(person['name'])
//   },
//   say_something: function(word){
//     console.log(this.name + " " + word)
//   },
//   walk: function(){
//     this.distance_traveled += 3
//     console.log(this.name + " is walking" + " " + this.distance_traveled)
//   },
//   run: function(){
//     this.distance_traveled += 10
//     console.log(this.name + " is running" + " " + this.distance_traveled)
//   },
//   crawl: function(){
//     person.distance_traveled += 1
//     console.log(person.name + " is crawling" + " " + person.distance_traveled)
//   }
//
// };
//
// person.say_name()
// person.say_something("I am cool")
// person.walk()
// person.run()
// person.crawl()


//PART3:

// function person(name, distance_traveled, say_name, say_something, walk, run, crawl){
//   this.name = name;
//   this.distance_traveled = distance_traveled;
//   this.say_name = this.name;
//   this.say_something = "andy says " +  say_something;
//   this.walk = "Andy is walking " + walk;
//   this.run = "Andy is running " + run;
//   this.crawl = "Andy is crawling " + crawl;
// }
//
// var newperson = new person("andy", 0, person.name, "I am cool", 3, 10, 1)
// console.log(newperson)

// function personConstructor(name, distance_traveled, say_name, say_something, walk, run, crawl){
//   this.name = name;
//   this.distance_traveled = distance_traveled;
//   this.say_name = say_name;
//   this.say_something = say_something;
//   this.walk = walk;
//   this.run = run;
//   this.crawl = crawl;
// }


function ninjaConstructor(name, cohort, yellowbelt, levelUp){
  this.name = name;
  this.cohort = cohort;
  this.beltlevel = yellowbelt;
  this.levelUp = function(){
    this.beltlevel += 1;
    console.log(this.beltlevel)
  };
}
var newninja = new ninjaConstructor("andy", "mean", "greenbelt", "levelUp")
console.log(newninja)
