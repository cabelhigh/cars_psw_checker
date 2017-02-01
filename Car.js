/*Purpose: To create a JSON object that represents a car
Signature: makeCar(make, model, color) -> JSON Object
Ex:
  makeCar("Nissan Altima", 2012, "yellow") -> { make: "Nissan Ultima", year: 2012, color: "yellow"}

*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeCar(make, model, year){
 //This is the closure
 var speed = 0;
 return {
   make: make,
   model: model,
   year: year,
   topSpeed: 85,
   getCar: function() {
     return "Make: " + make + "; Model: " + model + "; Year: " + year;
   },
   getSpeed: function(){ return speed;},
   accelerate: function() {speed+=10;},
   brake: function() {speed-=getRandomInt(0,speed/2)},
   park: function() {speed=0}
 }
}

var car = makeCar("Nissan", "Altima", 2012);

while(car.getSpeed()!==100){
  if (car.getSpeed()>car.topSpeed){
    console.log("Slow down speed is limit: " + car.topSpeed);
    car.brake();
    break;
  }
  else {
  car.accelerate();
  console.log("The current speed is now: " + car.getSpeed() );
  }
}

var iterationCount = 0;

while(car.getSpeed()>0){
  car.brake();
    console.log("Current speed is: " + car.getSpeed());
    if (car.getSpeed()<0){
      car.park();
      console.log("You have stopped: " +  car.getSpeed());
    }
  iterationCount++;
}

console.log("It took the car " + iterationCount + " brakes to finally stop.");


/*
car.getCar();
console.log(car.getSpeed())
car.accelerate()
console.log(car.getSpeed())
car.brake()
console.log(car.getSpeed())
*/
