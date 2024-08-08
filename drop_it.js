function dropElements(arr, func) {
    return !arr.find(func) ? [] : arr.slice(arr.indexOf(arr.find(func)));
    // while (!func(arr[0])) {
    //     arr.shift();
    // }
    // return arr;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));