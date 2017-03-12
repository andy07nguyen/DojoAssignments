//1:
//Each vehicle should have a makeNoise method
function VehicleConstructor(name, number_of_wheels, number_of_passengers){
  this.name = name;
  this.number_of_wheels = number_of_wheels;
  this.number_of_passengers = number_of_passengers;

  this.makeNoise = function(noise){
    console.log(this.name + " " + noise)
  }

  this.passenger = function(num){
    var count = 0;
    count = count + num
    console.log("Passenger: " + num + " Total: " + count)
  }
}
//CONSOLE LOG:
var car1 = new VehicleConstructor("bmw", 4, 5)
car1.makeNoise("vroom vroom!")

//2:
var bike1 = new VehicleConstructor("audi", 2, 1)
bike1.makeNoise("ring ring!")

//3:
var sedan = new VehicleConstructor("ford", 4, 4)
sedan.makeNoise("Honk Honk!")

//4:
var bus = new VehicleConstructor("chevy", 6, 20)
bus.passenger(15)
