
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let array2 =[];
  for (let i = 0; i < array.length ; i++) {
    const balance = array[i].balance;
    const totalWithdrawals = getTotal('withdrawals');
    const totalDeposits = getTotal('deposits');
    
    function getTotal(key){
      let total = 0;
      if (array[i].hasOwnProperty(key)){
        let transactions = array[i][key]
        for (let transaction in transactions){
         total += transactions[transaction];
        }
      }
      return total
    }
    
    if (balance !== totalDeposits - totalWithdrawals) {
      array2.push(array[i]);
    }
  }
  return array2;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
