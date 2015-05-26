var data = require("./items.json");


function findPrices(data) {
  for(var i = 0; i < data.length; i++) {
    var priceArray = data[i].price;
  }
  console.log(priceArray);
}
