// Immediately Invoked function expressions (IIFE)

/**
 - An IIFE is a function that is defined and executed
   immediately after its creation.
 - It is commonly used to create a private scope and
   avoid polluting the global namespace.
   - THIS MEANS VARIABLES INSIDE AN IIFE are local and
     private. ANy global variable with the same name
     will not affect the variable inside
     the IIFE or get affected by it.
 */

//  SYNTAX:
(function example() {
  console.log("This is a named IIFE!");
})(); // We need to use the semi-colons here because compiler does not know where the function ends

//  OR using arrow function:
(example2 = () => {
  console.log("This is an arrow function IIFE!");
})();
