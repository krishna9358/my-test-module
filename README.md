# My Test Module

A simple math utilities module for demonstration purposes.

## Installation

```bash
npm install @krishna9358/my-test-module
```

## Usage

```javascript
const mathUtils = require('@krishna9358/my-test-module');

console.log(mathUtils.add(2, 3)); // 5
console.log(mathUtils.subtract(5, 2)); // 3
console.log(mathUtils.multiply(4, 3)); // 12
console.log(mathUtils.divide(10, 2)); // 5
```

## API

### `add(a, b)`
Returns the sum of `a` and `b`.

### `subtract(a, b)`
Returns the difference of `a` and `b`.

### `multiply(a, b)`
Returns the product of `a` and `b`.

### `divide(a, b)`
Returns the quotient of `a` and `b`. Throws an error if `b` is zero.

## Publishing to GitHub Packages

See [PUBLISHING.md](PUBLISHING.md) for detailed instructions on how to publish this package to GitHub Packages.