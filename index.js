// Construct the following classes:

// Driver class:

// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
let driversId = 0;
let passengersId = 0;
let tripId = 0;
let store = {drivers:[], passengers:[], trips:[]};


class Driver {
    constructor(name){
        this.name = name;
        this.id = ++driversId;
        store.drivers.push(this);
    }
// trips() - returns all of the trips that a driver has taken
    trips(){
      
      return  store.trips.filter( trip =>  trip.driverId === this.id);
    }

// passengers() - returns all of the passengers that a driver has taken on a trip
    passengers(){
        const passengerIdList = [];
        const passengersOfDriver = [];
        this.trips().forEach(trip => passengerIdList.push(trip.passengerId));
        for(const passenger of store.passengers){
            
            if(passengerIdList.includes(passenger.id)){
                passengersOfDriver.push(passenger);
            }
        
        };
        return passengersOfDriver;
    }

}


// Passenger class:
// new Passenger() - initialized with a name; returns a JavaScript object that has attributes of id, and name
class Passenger {
    constructor(name){
        this.name = name;
        this.id = ++passengersId;
        store.passengers.push(this);
    }

// trips() - returns all of the trips that a passenger has taken
    trips(){
       return  store.trips.filter(trip => trip.passengerId === this.id )
    }

// drivers() - returns all of the drivers that has taken a passenger on a trip
    drivers(){
        const driverIdsForTrips =[];
        const passengerDrivers = [];
        this.trips().forEach( trip => driverIdsForTrips.push(trip.driverId));
        for(const driver of store.drivers){
            if(driverIdsForTrips.includes(driver.id)){
                passengerDrivers.push(driver);
            };
        };
        return passengerDrivers;
    }

}

// A passenger has many trips, and has many drivers through trips.


// Trip class:
// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId

class Trip{

    constructor(driver, passenger){
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = ++tripId;
        store.trips.push(this); 
    }

    // driver() - returns the driver associated with the trip
        driver(){
           return store.drivers.find(driver => driver.id === this.driverId);
        }

// passenger() - returns the passenger associated with the trip
        passenger(){
           return store.passengers.find(passenger =>  passenger.id === this.passengerId);
        }
}



