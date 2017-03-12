//1:
//Each vehicle should have a makeNoise method
function VehicleConstructor(name, number_of_wheels, number_of_passengers, speed){
//PRIVATE METHODS:
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled+= self.speed;
    console.log(distance_travelled)
  }

  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

//PUBLIC METHODS:
  this.name = name;
  this.number_of_wheels = number_of_wheels;
  this.number_of_passengers = number_of_passengers;
  this.speed = speed;
  this.vin = createVin();
  
  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1 ){
      // Use Math.floor and Math.random to generate random index to access character from char string
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }

  VehicleConstructor.prototype.makeNoise = function(noise){
    console.log(noise)
  }

  VehicleConstructor.prototype.pickUpPassengers = function(num){
    var count = 0;
    count = count + num
    console.log("Passenger: " + num + " Total: " + count)
  }

  VehicleConstructor.prototype.move = function(){
    updateDistanceTravelled(this.speed);
    this.makeNoise();
    return
  }

  VehicleConstructor.prototype.checkMiles = function(){
    console.log(distance_travelled);
    return
  }
}
//CONSOLE LOG:
//1:
var car1 = new VehicleConstructor("bmw", 4, 5)
car1.makeNoise("vroom vroom!")

//2:
var bike1 = new VehicleConstructor("audi", 2, 1)
bike1.makeNoise = function(){
  console.log("ring ring!")
}

//3:
var sedan = new VehicleConstructor("ford", 4, 4)
sedan.makeNoise = function(){
  console.log("Honk Honk!")
}

//4:
var bus = new VehicleConstructor("chevy", 6, 20, 200)
bus.pickUpPassengers(15)
bus.makeNoise = function(){
  console.log("bong bong")
}

console.log(bus)
bus.move()
bus.checkMiles()
bus.makeNoise()
bus.pickUpPassengers(10)
