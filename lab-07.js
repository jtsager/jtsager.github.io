// lab-07.js
function divideNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Test cases
try {
  console.log(divideNumbers(10, 2)); // Should print 5
  console.log(divideNumbers(10, 0)); // Should throw error
} catch (error) {
  console.error("Caught error:", error.message);
}