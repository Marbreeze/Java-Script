//the strict equality operator does not perform a type conversion, the value and data type has to be the same
//Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  // test
  testStrict(7);