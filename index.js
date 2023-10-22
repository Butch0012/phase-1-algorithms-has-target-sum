function hasTargetSum(array, target) {
  // Write your algorithm here
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // Check if the sum of the pair equals the target
        if (arr[i] + arr[j] === target) {
          return true; // If a pair is found, return true
        }
      }
    }
    // If no pair is found, return false
    return false;
}

/* 
  Write the Big O time complexity of your function here 
  O(n^2) 
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target)
    for i from 0 to length(array) - 1
        for j from i + 1 to length(array)
            if arr[i] + arr[j] equals target
                return true
    return false

*/

/*
  Add written explanation of your solution here
  the code compares each array element to the first arr[i] iterating until the array[i]+array[j] to equal the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
