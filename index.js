function hasTargetSum(array, target) {
  // Write your algorithm here

  const seenNumbers = new Set();

  // iteration

  for(const number of array){
    const complement = target - number;


    if (seenNumbers.has(complement)){
      return true;
    }

    seenNumbers.add(number);
  }

  //no pairs

  return false;
}

/* 
  Write the Big O time complexity of your function here
  - Best and average case: O(n) as we iterate through array once
  - worst case; o(n) check and insert elements inside a set in constant time
*/

/* 
  Add your pseudocode here

  1. Create and empty set called seenNumbers
  2. Loop through each number in array:
      - complement computation by "complement = target - number"
      -if complement exists in seenNumbers, returns true
      - Add number to SeenNumbers
  3. If loop finishes and no pair, return false
*/

/*
  Add written explanation of your solution here
   - The function uses a Set to store numbers seen so far.
  - As we iterate, we check if the complement exists in the Set.
  - If found, return true immediately.
  - If not, add the number to the Set and continue.
  - This ensures we check each number only once, leading to O(n) efficiency.
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
