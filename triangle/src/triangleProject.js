function parseArgs(side1, side2, side3) {
   return triangleType(parseInt(side1, 10), parseInt(side2, 10), parseInt(side3, 10));
}

function isTriangle(side1,side2,side3) {
   return side1 + side2  >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2;
}

function sideLengthPass(side1, side2, side3) {
  return side1 > 0 && side2 > 0 && side3 > 0;
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

function triangleType(side1, side2, side3) {
  parseArgs(side1,side2,side3);
  if (sideLengthPass(side1,side2,side3) === false) {
  throw new Error ("Triangle must have three sides")
  }
  if (isTriangle(side1,side2,side3) === false) {
    throw new Error("Not a triangle");
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
  throw new Error("Could not determine triangle type");
}
