function findFirstDuplicate ( arr ) {
  // loop over the arrays length
  for ( let i = 0; i < arr.length; i++ ) {
    // if the value of the last index is not the same return it 
    if ( arr.indexOf( arr[ i ] ) !== i ) {
      return arr[i]
    }
  }
  // if none of the numbers are the same return -1
  return -1
}

console.log( findFirstDuplicate( [ 1, 2, 3, 3, 2 ] ) )
console.log( findFirstDuplicate( [ 0, 2, 5, 5, 7, 7, 8, 9] ) )
console.log( findFirstDuplicate( [ 22, 22, 23, 24, 25, 26] ) )
console.log( findFirstDuplicate( [ 99, 100, 101, 102, 99, 98] ) )
console.log( findFirstDuplicate( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) )


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
