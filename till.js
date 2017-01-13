"use strict";

const till = {};

const inventory = {
  laptop: 1000,
  shirt: 30,
  shoes: 100
};

till.calculateTax = function(amount){
  return amount * 0.20;
}

till.lookupPrice = function(item){
  if (inventory[item] === undefined){
    throw new Error('Could not find this item in the inventory!');
  }
  return inventory[item];
}

till.calculateTotalSum = function(items){
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    let price = till.lookupPrice(items[i]);
    let tax = till.calculateTax(price);
    sum += (price + tax);
  }

  return sum;
}

till.generateReceipt = function(items){
  const receiptLines = [];

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let price = till.lookupPrice(item);
    let tax = till.calculateTax(price);
    let subtotal = price + tax;

    receiptLines.push(`Item #${i}: ${item} (${price} + ${tax} = ${subtotal})`);
  }

  receiptLines.push(`Total: ${till.calculateTotalSum(items)}`);
  return receiptLines.join("\n");
}

module.exports = till;
