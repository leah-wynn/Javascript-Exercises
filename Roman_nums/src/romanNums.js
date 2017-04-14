function toRoman(arabic) {  
  var romanNum = "";
  var num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var symbol = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  if (arabic <= 0){
  	throw new Error("Number must be greater than zero!");
  }
  if (arabic > 3999){
  	throw new Error("Number must be less than 3999!")
  }
  for (var i = 0;i<=num.length;i++) {
    while (arabic%num[i] < arabic) {   
      romanNum += symbol[i];
      arabic -= num[i];
    }
  }
  return romanNum;
}