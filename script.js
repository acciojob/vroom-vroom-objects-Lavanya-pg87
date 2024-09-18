// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

car.window.getMakeModel = function(){
	return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	car.call(this, make, model);
	this.toSpeed = topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
