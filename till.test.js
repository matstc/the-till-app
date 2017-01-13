"use strict";

const till = require('./till');

test('it calculates 20% tax', () => {
  expect(till.calculateTax(100)).toBe(20);
});

test('looks up the price of 1000 for a laptop', () => {
  // ...
});

test('it throws an exception if item not found in inventory', () => {
  // ...
});

test('it calculates total sum for a laptop and shoes', () => {
  // ...
});

test('it prints the receipt properly when buying a laptop and a shirt', () => {
  const receipt = till.generateReceipt(['laptop', 'shirt']);
  // ...
});
