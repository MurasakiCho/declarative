/**********/
// EXAMPLES
/**********/

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/

// prices: (items: [{price: number}]) -> [number]
// TODO - Implementation
const prices = items => items.map(items => items.price); 

// sum: (numbers: [number]) -> number
// TODO - Implementation
const sum = prices => prices.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0); 

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
// TODO - Implementation
const selectTaxable = items => items.filter( items => items.taxable == true);

// applyTax: (prices: [number], tax: number) -> [number]
// TODO - Implementation
const applyTax = (prices, tax) => prices.map(prices => prices * tax); 

// baseSum: (items: [{price: number}]) -> number
const baseSum = items => sum(prices(items));

// taxSum: (items: [{price: number}, {taxable: boolean}], tax: number) -> number
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative: (items: [{price: number}, {taxable: boolean}], tax: number) -> number
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax));

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
};
