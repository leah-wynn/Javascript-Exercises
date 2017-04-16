function toRoman(decimal) {
  var romanNumeralMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ]);
  function validateInput(input) {
    return input > 0 && input < 4000;
  }
  function determineRomanNumeral(input) {
    var output = "";
    for (var key of romanNumeralMap.keys()) {
      while (input % key < input) {
        output += romanNumeralMap.get(key);
        input -= key;
      }
    }
    return output;
  }
  if (validateInput(decimal)) {
    return determineRomanNumeral(decimal);
  }
  throw new Error("The input must be greater than zero and less than 4000");
}