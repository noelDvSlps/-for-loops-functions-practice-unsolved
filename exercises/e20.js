
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  const arrWith = [];
  const arrWithout = [];
  const arrBoth = [];
  for (let i = 0; i < array.length; i++) {
    let a = false;
    for (let b = 0; b < array[i].length; b++) {
      if (array[i][b] === "a") {
        a = true;
        break;
      }
    }
    a === true ? arrWith.push(array[i]) : arrWithout.push(array[i]);
  }

  arrBoth.push(arrWith);
  arrBoth.push(arrWithout);
  return arrBoth;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
