var calculator = {
  baseCost: parseFloat(prompt("What is the base cost of the meal?")),
  taxRate: prompt("What is the tax rate in percentage?") / 100,
  tipRate: prompt("What is the percentage of the desired tip rate?") / 100,
  amount: function(baseCost, rate){
    var total = baseCost * rate;
    return parseFloat(total.toFixed(2));
  },
  calcTip: function(baseCost, amount) {
    var total = (baseCost + amount(baseCost, taxRate) +  amount(baseCost, tipRate));
    return total.toFixed(2);
  }


}
