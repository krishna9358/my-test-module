// test.js
const mathUtils = require('./index.js');

console.log('Testing math utilities module:');

console.log('add(2, 3) =', mathUtils.add(2, 3)); // Should be 5
console.log('subtract(5, 2) =', mathUtils.subtract(5, 2)); // Should be 3
console.log('multiply(4, 3) =', mathUtils.multiply(4, 3)); // Should be 12
console.log('divide(10, 2) =', mathUtils.divide(10, 2)); // Should be 5

try {
  mathUtils.divide(10, 0); // Should throw an error
} catch (error) {
  console.log('divide(10, 0) correctly threw an error:', error.message);
}

console.log('All tests completed!');