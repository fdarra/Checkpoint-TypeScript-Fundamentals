// Define the Vehicle interface
// Implement the Car class that implements the Vehicle interface
var Car = /** @class */ (function () {
    // Constructor to initialize make, model, and year
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method
    // This method logs a message indicating that the car engine has started
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car 
var myCar = new Car("Citroen", "C4", 2008);
myCar.start();
