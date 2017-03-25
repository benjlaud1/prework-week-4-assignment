/**
Array Review
**/

function createArray() {
  // create an array with 6 elements (numbers and strings only)
  // Write code below
  var myArray = ['Ben', 30, 'Cayla', 33, 'Victoria', 1.833, 'Ottoleigh', '.25'];
  // return this array
  return myArray;
}

function loopArray(array) {
  // used below
  var conString = '';
  // Write code here: Concatentate all of the values in array together using a loop
  for (var i=0; i<array.length; i++) {
    conString = conString.concat(array[i] + ' ');
  }
  // return concatentated values
  return conString;
}


function arrayReverser(arrayParam) {
  // Copy items from arrayParam to a new array called reversedArray, reversing the order of elements
  // Last element on arrayParam should become the first in reversedArray
  // Do not use Array.reverse()!
  var reversedArray = [];

  // Write the code here
  for (var i = arrayParam.length - 1; i >= 0 ; i--) {
    reversedArray.push(arrayParam[i]);
  }

  // return our reversed array
  return reversedArray;
}

// call and console log the return for loopArray and arrayReverser

console.log(loopArray(createArray()));
console.log(arrayReverser(createArray()));

// Concatentate the reversed array, not call for but wanted to do it. BLL

console.log(loopArray(arrayReverser(createArray())));
