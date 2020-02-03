/**
 * The following is the function where the solution shall be written
 */

function solution(input) {
  // 1. Split each value into an array and filter out values which aren't integers
  let intArr = input
    .split("")
    .filter(Number)
    .sort((a, b) => {
      return b - a;
    });

  try {
    if (intArr.length === 0)
      throw new TypeError("Array doesn't contain any integers");
  } catch (err) {
    console.log(err);
  }

  let result = [];
  let usedNums = [];

  // 2. Recursive function to create all permutations
  function permutateArrays(intArr) {
    let num;
    // If array length is 0 push the results
    if (!intArr.length) {
      result.push(usedNums.slice());
    }
    for (let i = 0; i < intArr.length; i++) {
      num = intArr.splice(i, 1); // Pull out each element to num and remove from array
      usedNums.push(num); // Push the element to the stack
      permutateArrays(intArr); // Call permutateArrays function with modified array
      intArr.splice(i, 0, num); // Add the num element to the start of the array
      usedNums.pop(); // Remove last element from stack
    }
  }
  permutateArrays(intArr);

  // 3. Format result
  result = result.map(val => val.join("")).join();
  return result;
}

// some example inputs
console.log(solution("326")); // expected ouput 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236
