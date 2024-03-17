var MathHelper = {};

// Add utility functions to your library
MathHelper.utils = {
  // Function to add two numbers
  add: function (a, b) {
    return a + b;
  },

  // Function to subtract two numbers
  subtract: function (a, b) {
    return a - b;
  },

  // Function to multiply two numbers
  multiply: function (a, b) {
    return a * b;
  },

  // Function to divide two numbers
  divide: function (a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
};

// Example usage of the library
console.log(MyLibrary.utils.add(5, 3));      // Output: 8
console.log(MyLibrary.utils.subtract(10, 4)); // Output: 6
console.log(MyLibrary.utils.multiply(2, 6));  // Output: 12
console.log(MyLibrary.utils.divide(10, 2));   // Output: 5
