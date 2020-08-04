/*
Next create a Bank class, a Bank object should have an array of
Account objects, and have addAccount(), addSavingsAccount(interest),
addCheckingAccount(overdraft) methods each of which returns the number
of the created accounts. Also add a closeAccount(number) method that closes
(removes from the array) the accounts with that number, and a accountsReport()
method that returns a
String with each accounts on its own line. Use a static nextNumber variable on
the Bank class to know what the number for the next accounts will be.
Create Mocha / Chai tests to ensure that everything is working.
*/

class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount() {
    const rand = Math.floor(Math.random() * 100) + 1000;
    let acc = new Account(rand);
    this.accounts.push(acc);
    return rand;
  }
  addSavingsAccount(interest) {
    const rand = Math.floor(Math.random() * 100) + 1000;
    let acc = new CheckingAccount(rand, interest);
    this.accounts.push(acc);
    return rand;
  }
  addCheckingAccount(overdraft) {
    const rand = Math.floor(Math.random() * 100) + 1000;
    let acc = new SavingsAccount(rand, overdraft);
    this.accounts.push(acc);
    return rand;
  }
  closeAccount(number) {
    this.accounts.filter((e, i) => {
      if (e.number == number) {
        this.accounts.splice(i, 1);
      }
    });
  }
  accountsReport() {
    return this.accounts
      .map((e) => {
        return e.toString();
      })
      .join("\n");
  }

  endOfMonth() {
    return this.accounts
      .map((e) => {
        return e.endOfMonth();
      })
      .join("\n");
  }
}
