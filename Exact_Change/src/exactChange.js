
var currency = 
[["ONE HUNDRED", 100.00],
  ["TWENTY", 20.00],
  ["TEN", 10.00],
  ["FIVE", 5.00],
  ["ONE", 1.00],
  ["QUARTER", 0.25],
  ["DIME", 0.10],
  ["NICKEL", 0.05],
  ["PENNY", 0.01]];



function roundTo(dollarAmount) {
  return Math.round(dollarAmount * 100) / 100;
}


function getdrawerTotal(drawer) {
  return drawer.map(function (element) {
    return element[1];
  }).reduce(function (acc, element) {
    return (acc + element);
  }, 0);
}


function checkCashRegister(price, tender, drawer){
  var output = [];
  var drawerMap = new Map(drawer);

  var initialChangeDue = roundTo(tender - price);
  var drawerTotal = roundTo(getdrawerTotal(drawer));
  var netDifference = roundTo(drawerTotal - initialChangeDue);

  if (netDifference === 0) {
    return "Closed";
  }
  if (netDifference < 0) {
    return "Insufficient Funds";
  }

  var exact_change = currency.reduce(function (acc, element) {
    var currencyKeys = element[0];
    var currencyValues = element[1];
    var drawerValue = drawerMap.get(currencyKeys);
    var amount = 0;
    while (drawerValue > 0 && initialChangeDue >= currencyValues) {
      initialChangeDue = roundTo(initialChangeDue - currencyValues);
      drawerValue -= currencyValues;
      amount += currencyValues;
    }

    if (amount > 0) {
      acc.push([currencyKeys, amount]);
    }
    return acc;
  }, []);

  if (exact_change.length < 0 || initialChangeDue < 0) {
    return "Insufficient Funds";
  }

  return exact_change;
}
