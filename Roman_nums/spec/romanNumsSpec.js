describe ("when converting arabic numbers to roman numerals", function(){
	it ("should return Error for 0", function(){
			expect(function () {toRoman(0); }).toThrowError("The input must be greater than zero and less than 4000");
	});
	it ("should return Error for negative numbers", function(){
			expect(function () {toRoman(-2); }).toThrowError("The input must be greater than zero and less than 4000");
	});
	it ("should return Error for numbers larger than 3999", function(){
			expect(function () {toRoman(4000); }).toThrowError("The input must be greater than zero and less than 4000");
	});
	it ("should return 'I' for 1", function(){
			expect(toRoman(1)).toEqual("I");
	});
	it ("should return 'XLIV' for 44", function(){
			expect(toRoman(44)).toEqual("XLIV");
	});
	it ("should return 'LXXXVIII' for 88", function(){
			expect(toRoman(88)).toEqual("LXXXVIII");
	});
	it ("should return 'MCMXC' for 1990", function(){
		expect(toRoman(1990)).toEqual("MCMXC");
	});
		it ("should return 'MMMCMXCIX' for 3999", function(){
			expect(toRoman(3999)).toEqual("MMMCMXCIX");
	});
})