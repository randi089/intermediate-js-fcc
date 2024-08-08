function kpk(a, b) {
    return (a / fpb(a, b)) * b;
  }

  function fpb(a, b) {
    return b == 0 ? a : fpb(b, a % b);
  }

  function smallestCommons(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let hasil = min;
    for (let i = min; i <= max; i++) {
        hasil = kpk(i, hasil);
    }
    return hasil;
  }
  
  console.log(smallestCommons([1,5]));