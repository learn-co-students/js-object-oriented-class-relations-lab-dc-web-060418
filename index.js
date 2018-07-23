const store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
    constructor(name){
        this.name = name 
        this.id = ++driverId
        store.drivers.push(this)
    }
    trips(){
        return store.trips.filter((trip)=>trip.driverId === this.id)
    }
    passengers(){
        return this.trips().map((trip)=>store.passengers.find((passenger)=>passenger.id===trip.passengerId))
    }
}

let passengerId = 0
class Passenger {
    constructor(name){
        this.name = name
        this.id = ++passengerId
        store.passengers.push(this)
    }

    trips(){
        return store.trips.filter((trip) => trip.passengerId === this.id)
    }
    drivers(){
        return this.trips().map((trip) => store.drivers.find((driver) => driver.id === trip.driverId))
    }
}

let tripId = 0

class Trip {
    constructor(driver, passenger){
        this.id = ++tripId
        this.driverId = driver.id
        this.passengerId = passenger.id
        store.trips.push(this)
    }

    passenger(){
        return store.passengers.find((passenger)=> passenger.id === this.passengerId)
    }
    driver() {
        return store.drivers.find((driver) => driver.id === this.driverId)
    }
}