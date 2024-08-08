function addTogether(num1) {
    if (Array.from(arguments).length > 1) {
        return Array.from(arguments).every(value => typeof value === 'number') ? Array.from(arguments).reduce((acc, value) => acc + value, 0) : undefined;
    }
    return typeof num1 === 'number' ? function(num2) {
        return typeof num2 === 'number' ? num1 + num2 : undefined;
    } : undefined;
  }
  
  console.log(addTogether(2,3));
  console.log(addTogether("2", 3));
  console.log(addTogether(5));
  console.log(addTogether(5)(7));