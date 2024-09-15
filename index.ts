// Define the Vehicle interface

interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implement the Car class that implements the Vehicle interface

  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize make, model, and year

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implement the start method
    // This method logs a message indicating that the car engine has started
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car 
  const myCar = new Car("Citroen", "C4", 2008);
  

  myCar.start();
  