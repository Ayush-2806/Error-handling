function numberChecker(arr) {
    return function(num) {
      return arr.includes(num);
    }
  }




    let arr = [1,2,3,4,5]
  const checkNumber = numberChecker(arr);

  console.log(checkNumber(3)); // true
  console.log(checkNumber(6));