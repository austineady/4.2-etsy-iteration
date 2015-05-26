var _ = require('underscore');
var data = require("./items.json");

function findPrices(data) {
  var priceArray = _.map(data, function(item) {
    return item.price;
  });
  var priceSum = _.reduce(priceArray, function(a, b) {
    return a + b;
  });
  var priceAverage = priceSum / data.length;
  console.log(priceAverage);
}

findPrices(data);

function priceRange(data) {
  var itemRange = _.filter(data, function (item) {
    if(item.price > 14 && item.price < 18) {
      return item;
    }
  });
  var titleArray = _.map(itemRange, function(item) {
    return item.title;
  });
  console.log(titleArray);
}

priceRange(data);

function currencyFinder(data) {
  var currency = _.filter(data, function (item) {
    if(item.currency_code === "GBP") {
      return item;
    }
  });
  var currencyTitle = _.map(currency, function(item) {
    return item.title;
  });
  console.log(currencyTitle);
}

currencyFinder(data);

function materialFinder(data) {
  var woodItems = [];
  var itemMaterials = _.filter(data, function(item) {
    if(_.indexOf(item.materials, "wood") !== -1) {
      woodItems.push(item);
    }
  });
  var woodItemTitle = _.map(woodItems, function(item) {
    return item.title;
  });
  console.log(woodItemTitle);
}

materialFinder(data);

function materialRangeFinder(data) {
  var largeMaterialItems = [];
  var itemMaterials = _.filter(data, function(item) {
    if(item.materials.length >= 8) {
      largeMaterialItems.push(item);
    }
  });
  var largeMaterialItemTitle = _.map(largeMaterialItems, function(item) {
    return item.title;
  });
  console.log(largeMaterialItemTitle);
}

materialRangeFinder(data);

function creatorFinder(data) {
  var sellerMadeItems = [];
  var itemMakers = _.filter(data, function(item) {
    if(item.who_made === "i_did") {
      sellerMadeItems.push(item);
    }
  });
  console.log(sellerMadeItems.length + " " + "were made by their sellers");
}

creatorFinder(data);
