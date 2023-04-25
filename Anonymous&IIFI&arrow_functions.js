// 1.Print odd numbers in an array

// ANONYMOUS FUNCTION
var arr = [2, 5, 6, 7, 9, 11, 12];
var result = [];
var odd = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd(arr));

// IIFE
(function odd(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([2, 5, 6, 7, 9, 11, 12]);

// 2.Convert all the strings to title caps in a string array

// ANONYMOUS FUNCTION
var arr = "hello everyone";
var caps = function (arr) {
  var sentence = arr.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  sentence = sentence.join(" ");
  return sentence;
};
console.log(caps(arr));

// b) IIFE
(function caps(arr) {
  var sentence = arr.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  console.log(sentence.join(" "));
  return sentence;
})("hello everyone");

// 3.Sum of all numbers in an array

// ANONYMOUS FUNCTION
var arr = [2, 5, 6, 7, 9, 11, 12];
var b = 0;
var sum = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    b = b + arr[i];
  }
  return b;
};
console.log(sum(arr));

// c) IIFE
(function sum(arr) {
  var b = 0;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    b = b + arr[i];
  }
  console.log(b);
  return b;
})([2, 5, 6, 7, 9, 11, 12]);

// 4.Return all the prime numbers in an array

// ANONYMOUS FUNCTION
var prime = function (arr) {
  let primearr = [];
  arr.forEach((num) => {
    let count = 0;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count == 0) {
      primearr.push(num);
    }
  });
  console.log(primearr);
  return pimearr;
};
prime([2, 5, 9, 78, 13, 9, 20])(
  // IIFE
  function prime(arr) {
    let primearr = [];
    arr.forEach((num) => {
      let count = 0;
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          count++;
        }
      }
      if (count == 0) {
        primearr.push(num);
      }
    });
    console.log(primearr);
    return primearr;
  }
)([2, 5, 9, 78, 13, 9, 20]);

// 5.Return all the palindromes in an array

// ANONYMOUS FUNCTION
var arr = ["malayalam", "mom", "do", "rear", "dad", "refer"];
var pal = function (arr) {
  let b = [];
  let c = [];
  arr.forEach((item) => {
    b.push(item.split("").reverse().join(""));
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == b[i]) {
      c.push(arr[i]);
    }
  }
  return c;
};
console.log(pal(arr));

//  IIFE
(function pal(arr) {
  let b = [];
  let c = [];
  arr.forEach((item) => {
    b.push(item.split("").reverse().join(""));
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == b[i]) {
      c.push(arr[i]);
    }
  }
  console.log(c);
  return c;
})(["malayalam", "mom", "do", "rear", "dad", "refer"]);

// 6.Return median of two sorted arrays of the same size.

// ANONYMOUS FUNCTION
let e = ["80", "9", "700"];
let b = ["40", "5", "200"];
function compareNumbers(a, b) {
  return a - b;
}
let arr = e.concat(b).sort(compareNumbers);

var median = function (arr) {
  let d = arr.length / 2;
  let f = (+arr[d - 1] + +arr[d]) / 2;
  return f;
};
console.log(median(arr));

// IIFE
let a = ["80", "9", "700"];
let b = ["40", "5", "200"];
function compareNumbers(a, b) {
  return a - b;
}
let arr = a.concat(b).sort(compareNumbers);
(function median(arr) {
  let d = arr.length / 2;
  let f = (+arr[d - 1] + +arr[d]) / 2;
  console.log(f);
  return f;
})(arr);

// 7.Remove duplicates from an array

// ANONYMOUS FUNCTION
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
var dup = function (arr) {
  return [...new Set(arr)];
};
console.log(dup(arr));

// IIFE
(function dup(arr) {
  console.log([...new Set(arr)]);
  return [...new Set(arr)];
})(["apple", "mango", "apple", "orange", "mango", "mango"]);

// 8.Rotate an array by k times

// ANONYMOUS FUNCTION:
let arr = ["1", "2", "3", "4", "5"];
let k1 = 2;
let rotate = function (arr, k1) {
  for (let i = 0; i < k1; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotate(arr, k1));

// IIFE
let arr = ["1", "2", "3", "4", "5"];
let k2 = 2;
(function rotate(arr) {
  for (let i = 0; i < k2; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
  return arr;
})(arr);

// 3.ARROW FUNCTION

// a)Print odd numbers in an array

var arr = [2, 5, 6, 7, 9, 11, 12];
var result = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd(arr));

// b)Convert all the strings to title caps in a string array

var arr = "hello everyone";
var caps = (arr) => {
  var sentence = arr.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  sentence = sentence.join(" ");
  return sentence;
};
console.log(caps(arr));

// c)Sum of all numbers in an Array

var arr = [2, 5, 6, 7, 9, 11, 12];
var b = 0;
var sum = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    b = b + arr[i];
  }
  return b;
};
console.log(sum(arr));

// d)Return all the prime numbers in an array

var prime = (arr) => {
  let primearr = [];
  arr.forEach((num) => {
    let count = 0;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count == 0) {
      primearr.push(num);
    }
  });
  console.log(primearr);
  return primearr;
};
prime([2, 5, 9, 78, 13, 9, 20]);

// e)Return all the palindromes in an array

var arr = ["malayalam", "mom", "do", "rear", "dad", "refer"];
var pal = (arr) => {
  let b = [];
  let c = [];
  arr.forEach((item) => {
    b.push(item.split("").reverse().join(""));
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == b[i]) {
      c.push(arr[i]);
    }
  }
  return c;
};
console.log(pal(arr));
