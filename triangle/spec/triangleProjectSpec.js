describe ("when determining triangle type", function(){
	it ("should return false if triangle does not exsist", function(){
		expect(isTriangle(3,4,10)).toEqual(false);
	})
	it ("should return true if triange can exsist", function(){
		expect(isTriangle(1,2,3)).toEqual(true);
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
		expect(function () {type(3,4,10); }).toThrowError(Error);
	});

	it ("should print Equilateral if triangle type is equilateral", function(){
		expect(type(2,2,2)).toEqual("Equilateral");
	});

	it ("should print Isosceles if triangle type is isosceles", function(){
		expect(type(2,2,3)).toEqual("Isosceles");
	});

	it ("should print Scalene if triangle type is scalene", function(){
		expect(type(1,2,3)).toEqual("Scalene");
	});
})