//Problem 1
//Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.

var forLooped = function (list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum += list[i];
  }

  return sum;
};

var whileLooped = function (list) {
  var track = 0;
  var sum = 0;

  while (track < list.length) {
    console.log('inside while loop', sum, track);
    sum += list[track];
    track++;
  }

  return sum;
};

var recursed = function (list) {

  var recurse = function (item, past) {
    past += item;
  };

  //come back to this
};

var test = [1, 2, 3, 4, 5];

// console.log(whileLooped(test));

//Problem 2
//Write a function that combines two lists by alternatingly taking elements.
//For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3]

var combineList = function (list1, list2) {
  var joinedArr = [];
  for (var i = 0; i < list1.length; i++) {
    joinedArr.push(list1[i]);
    joinedArr.push(list2[i]);
  }

  return joinedArr;
};

var first = ['a', 'b', 'c'];

var second = [1, 2, 3];

// console.log(combineList(first, second));

//Problem 3
//Write a function that computes the list of the first 100 Fibonacci numbers.
//By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
//As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34

var fib = function () {

};

//Problem 4
//Write a function that given a list of non negative integers, arranges them such that they form the largest possible number.
//For example, given [50, 2, 1, 9], the largest formed number is 95021.

var findinglargest = function (array) {
  var sorted = array.sort().reverse().join('');
  return sorted;
};

var test2 = [50, 2, 1, 9];

// findinglargest(test2);

//Problem 5
//Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ..., 9 (in this order) such that the result is always 100.
//For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.

var oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var allPossible = function (array) {
  //this is going to be recursion
  //the only thing we can identfy is the operater

  //its an all permutations question
  //the 
  }

};
