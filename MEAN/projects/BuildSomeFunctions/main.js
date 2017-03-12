//1:
// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
// function runningLogger(){
//   console.log("I am running")
// }
// runningLogger()

//2:
//Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
// function multiplyByTen(num){
//   num = num * 10;
//   return num
// }
// console.log(multiplyByTen(5))

//3:
//Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
// function stringReturnOne(){
//   str = "hello"
//   return str
// }
//
// function stringReturnTwo(){
//   str = "world"
//   return str
// }
//
// console.log(stringReturnOne(), stringReturnTwo())

//4:
// //Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
// function hi(){
//   console.log("hi")
// }
//
// function caller(func){
//   typeof(func)
//   return func
// }
// console.log(caller(hi))

//5:
//Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
// function hello(){
//   str = "hello";
//   return str
// }
//
// function world(){
//   str = "world"
//   return str
// }
//
// function myDoubleConsoleLog(){
//   console.log(hello, world)
// }
// myDoubleConsoleLog(hello,world)

//6:
//Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
function world(){
  console.log("ending?")
}

function str(){
  var str = "interesting"
  return str
}

function caller2(){
  console.log("starting")
  setTimeout(function(){ world(); }, 2000);
}

function myDoubleConsoleLog(caller2, str){
  console.log(caller2, str)
}
myDoubleConsoleLog(caller2(), str())
