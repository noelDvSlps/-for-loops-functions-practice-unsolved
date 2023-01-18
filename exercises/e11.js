// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let array2 =[];
  for (let i = 0; i < array.length ; i++) {
    let sumWithdrawals = 0;
    if (array[i].hasOwnProperty('withdrawals')){
      let withdrawals = array[i].withdrawals
      for (let withdrawal in withdrawals){
       sumWithdrawals += withdrawals[withdrawal];
      }
      array2.push(sumWithdrawals);
    } else {
      array2.push(0);
    }
  }
  return array2;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
