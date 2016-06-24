class Car {
	constructor(loc, speed) {
		this.loc = loc;
		this.speed = speed;
		this.drive = 2;
	}

	move() {
		this.loc = this.loc + this.speed;
	}

	render() {
		var element = document.getElementById("#game")

	}
}

let ben = new Car(9, 3)

console.log(ben.loc)
ben.move();
console.log(ben.loc);
console.log(ben.drive);
class FourWheelDrive extends Car {
	constructor (loc, speed) {
		super(loc, speed)
		this.drive = 4;
	}

}


var toyota = new FourWheelDrive(0, 5);
console.log(toyota.loc)
toyota.move();
console.log(toyota.loc)
console.log(toyota.drive)