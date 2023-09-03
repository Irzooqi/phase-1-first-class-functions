function receivesAFunction(callback) {
  callback();
    return null;
  }
  receivesAFunction(function(name) {return 'Hello'})

  function returnsANamedFunction() {
  
    return function namedFunction() {
   
    };
  }
  
  function returnsAnAnonymousFunction() {
 
    return function() {
 
    };
  }
  
  // Example usage:
  // receivesAFunction(() => console.log("Callback function called"));
  
  // const namedFunc = returnsANamedFunction();
  // console.log(namedFunc.name); // Output: "namedFunction"
  
  // const anonFunc = returnsAnAnonymousFunction();
  // console.log(anonFunc.name); // Output: ""
  
  
  
  
  
  