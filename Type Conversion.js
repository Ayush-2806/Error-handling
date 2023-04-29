function convertToNumber(str) {
    try {
      return Number(str);
    } catch (error) {
      return "Invalid number";
    }
  }

  let str = "abc";

  console.log(convertToNumber(str));