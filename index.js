let store = {
  drivers: [],
  passengers: [],
  trips: []
}

let driverID = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverID
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter((trip) => trip.driverId === this.id)
  }
  passengers() {
     return this.trips().map(function(trip) {
       return trip.passenger()
     })
  }
}

let passengerID = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerID
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter((trip) => trip.passengerId === this.id)
  }
  drivers() {
    return this.trips().map((trip) =>  trip.driver() )
  }
}

let tripID = 0
class Trip {

  constructor(driver, passenger) {
    this.id = ++tripID
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  passenger() {
    return store.passengers.find((passenger) => passenger.id === this.passengerId)
  }
  driver() {
    return store.drivers.find((driver) => driver.id === this.driverId)
  }

}
