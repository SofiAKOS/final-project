function createArray(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }
  
  let arr = createArray(2, 9);
  console.log(arr);

  function printNumbers(a, b) {
    let i = a;
    let count = 1;
    while (i <= b) {
      console.log(i);
      if (count < i - a + 1) {
        count++;
      } else {
        i++;
        count = 1;
      }
    }
  }
  
  let a = 1;
  let b = 3;
  printNumbers(a, b);


  function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
       let = Math.floor(Math.random() * 500) + 1;
      arr.push(randomNumber);
    }
    return arr;
  }
  
  let result = randArray(5);
  console.log(result);


  function compact(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
  }
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2);


  function separateArrays(arr) {
    const numberArray = [];
    const stringArray = [];
    const flattenArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        numberArray.push(arr[i]);
      } else if (typeof arr[i] === 'string') {
        stringArray.push(arr[i]);
      } else if (Array.isArray(arr[i])) {
        flattenArray.push(...arr[i]);
      }
    }
  
    return [numberArray, stringArray, flattenArray];
  }
  
  const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  const [numberArray, stringArray, flattenArray] = separateArrays(arr);
  console.log(numberArray);
  console.log(stringArray);
  console.log(flattenArray);



  function calc(a, b, op) {
    let result;
  
    if (op === 1) {
      result = a - b;
    } else if (op === 2) {
      result = a * b;
    } else if (op === 3) {
      result = a / b;
    } else {
      result = a + b;
    }
  
    return result;
  }
  
  console.log(calc(10, 3, 1)); 
  console.log(calc(10, 3, 2)); 
  console.log(calc(10, 3, 3)); 
  console.log(calc(10, 3, 4)); 



  function findUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
  }
  
  console.log(findUnique([1, 2, 3, 5, 3]));  // false
  console.log(findUnique([1, 2, 3, 5, 11])); // true
  
  
  
  

  

  
