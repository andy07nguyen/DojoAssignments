

console.log(slots(200));

function slots(coins){
  for(var i =coins; i>0;--i){
    if (Math.floor(Math.random()*100)+1==8) { // 8 is winning number(chance of winning)
      console.log("Win");
      return Math.floor(Math.random()*51)+50+i; // winning. how many quarters
    }
  }
  return 0;
}
