function isTriangle(side1,side2,side3) {
	return side1 + side2  >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2;
}

function isEquilateral(side1,side2,side3) {
	return side1 === side2 && side2 === side3;
}

function isIsosceles(side1,side2,side3) {
	return side1 === side2 && side2 != side3 || side1 === side3 && side3 != side2 || side2 === side3 && side1 != side3;
}

function isScalene(side1,side2,side3) {
	return side1 != side2 && side2 != side3;
}

function type(side1, side2, side3) {
	if (isTriangle(side1,side2,side3) === false) {
		throw new Error("Triangle cannot exist");
	}
  if (isEquilateral(side1, side2, side3)) {
      return "Equilateral"
  }
  if (isIsosceles(side1, side2, side3)) {
      return "Isosceles"
  }
  if (isScalene(side1, side2, side3)) {
      return "Scalene"
  }
}

