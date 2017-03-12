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


//PUBLIC METHODS:
  this.name = name;
  this.number_of_wheels = number_of_wheels;
  this.number_of_passengers = number_of_passengers;
  this.speed = speed;

  this.makeNoise = function(noise){
    console.log(noise)
  }

  this.pickUpPassengers = function(num){
    var count = 0;
    count = count + num
    console.log("Passenger: " + num + " Total: " + count)
  }

  this.move = function(){
    updateDistanceTravelled(this.speed);
    this.makeNoise();
    return
  }

  this.checkMiles = function(){
    console.log(distance_travelled);
    return
  }
}
//CONSOLE LOG:
// var car1 = new VehicleConstructor("bmw", 4, 5)
// car1.makeNoise("vroom vroom!")
//
// //2:
// var bike1 = new VehicleConstructor("audi", 2, 1)
// bike1.makeNoise("ring ring!")
//
// //3:
// var sedan = new VehicleConstructor("ford", 4, 4)
// sedan.makeNoise("Honk Honk!")

//4:
console.log(bus = new VehicleConstructor("chevy", 6, 20, 200))
bus.pickUpPassengers(15)
bus.makeNoise = function(){
  console.log("honk honk")
}
bus.move()
bus.checkMiles()
