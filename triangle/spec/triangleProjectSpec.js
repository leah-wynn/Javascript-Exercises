describe ("when determining triangle type", function(){
	it ("should return false if triangle does not exsist", function(){
		expect(isTriangle(3,4,10)).toEqual(false);
	})
	it ("should return true if triange can exsist", function(){
		expect(isTriangle(1,2,3)).toEqual(true);
	});

	it ("should return true if all side measurements are greater than zero", function (){
		expect(sideLengthPass(0.002,0.5,3)).toEqual(true);
	})
	it ("should return false if any side measurements are less than or equal to zero", function (){
		expect(sideLengthPass(0,2,5)).toEqual(false);
	});

	it ("should return true if all sides are equal", function() {
		expect(isEquilateral(1,1,1)).toEqual(true);
	})
	it ("should return false if not all sides are equal", function(){
		expect(isEquilateral(1,2,1)).toEqual(false);
	});

	it ("should return true if two sides are equal", function(){
		expect(isIsosceles(1,1,3)).toEqual(true);
	})
	it ("should return false if there are not two equal sides", function(){
		expect(isIsosceles(1,2,3)).toEqual(false);
	});

	it ("should return true if no sides are equal", function(){
		expect(isScalene(1,2,3)).toEqual(true);
	})
	it ("should return false if any sides are equal", function(){
		expect(isScalene(1,1,2)).toEqual(false);
	});

	it ("should return error if triangle does not exist", function(){
		expect(function () {triangleType(3,4,10); }).toThrowError("Not a triangle");
	});

	it ("should print Equilateral if triangle type is equilateral", function(){
		expect(triangleType("10","10","10")).toEqual("Equilateral");
	});

	it ("should print Isosceles if triangle type is isosceles", function(){
		expect(triangleType(2,2,3)).toEqual("Isosceles");
	});

	it ("should print Scalene if triangle type is scalene", function(){
		expect(triangleType(1,2,3)).toEqual("Scalene");
	});
	it ("should throw error if the value of any side is less than or equal to zero", function(){
		expect(function() {triangleType(0,1,2); }).toThrowError("Triangle must have three sides");
	});
	it ("should throw error if the triangle type can not be determined", function (){
		expect(function(){triangleType("10",10,"10"); }).toThrowError("Could not determine triangle type");
	});
	it ("should throw error if argument data type is not integer", function (){
		expect(function(){triangleType("bob", "20", 7); }).toThrowError(Error);
	})
	it ("should parse string arguments to integer", function(){
		expect(triangleType("2",2,"2")).toEqual("Equilateral");
	});
})