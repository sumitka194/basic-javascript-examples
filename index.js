function Vehcile(brand) {
    this.brand = brand;
}

// Example for Call method in Javascript
// Can be use to mimic inheritance

function Car(brand, name) {
    Vehcile.call(this, brand);
    this.name = name;
}

const car = new Car('Hyundai', 'Creta');
console.log(car);

// Exmaple for Apply method in Javascript
// Can be use to mimic inheritance
// Can be used when arguments are too long to pass in the method

function MotorBike() {
    const [name, ...rest] = arguments;
    // apply takes second argument as an array
    // so if we look here we can see that rest is an array
    // lets verify if rest is an Array
    // console.log('rest is an Array :: ', Array.isArray(rest));
    Vehcile.apply(this, rest);
    this.name = name;
}

const motorBike = new MotorBike('R15', 'Yamaha');
console.log(motorBike);

// Exmaple for Bind method in Javascript
// Can be use to add methods to the other function

function Bike(name) {
    // this.vehcile = Vehcile.bind(this);
    this.name = name;
}
Vehcile.apply(Bike, ['FireFox'])
const bike = new Bike('Nexus');
console.log(bike);
// bike.vehcile('FireFox');
// console.log(bike);
