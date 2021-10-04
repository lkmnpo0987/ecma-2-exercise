

let areaOfCircle = function (radius) {
	let ca = 3.14*radius*radius;
	console.log('Area of the circle is ' + ca + ' square unit');
}


let areaOfRectangle = function (length, breadth) {
	let ra = length * breadth;
	console.log('area of the rectangle is ' + ra + ' square unit');
}
let areaOfCylender = function (radius, height) {
	let cya = 3.14 * radius *radius*height;
	console.log('Area of the cylender is ' + cya + ' square unit');
}
// console.log(areaOfCircle(4));
// console.log(areaOfRectangle(4,5));
// console.log(areaOfCylender(4,5));

export {areaOfCircle,areaOfRectangle,areaOfCylender};

