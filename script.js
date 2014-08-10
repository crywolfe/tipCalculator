
var baseCost = parseFloat(prompt("What is the base cost of the meal?"));
var taxRate = prompt("What is the tax rate in percentage?") / 100;
var tipRate = prompt("What is the percentage of the desired tip rate?") / 100;

var amount = function(baseCost, rate){
  var total = baseCost * rate;
  return parseFloat(total.toFixed(2));
};


var calcTip = function(baseCost, amount) {
  var total = (baseCost + amount(baseCost, taxRate) +  amount(baseCost, tipRate));
  return total.toFixed(2);
};
