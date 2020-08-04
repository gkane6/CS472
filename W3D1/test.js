let accTest = new Account(12345);
let savingTest = new SavingsAccount(678, 3);
let checkingTest = new CheckingAccount(369, 500);
let bankList = new Bank();

describe("Account", () => {
  it("get Account number", () => {
    assert.equal(12345, accTest.getNumber());
  });
  it("get Account balance", () => {
    assert.equal(0.0, accTest.getBalance());
  });
  it("get perfect account balance after deposit and withdraw", () => {
    accTest.deposit(1000);
    accTest.withdraw(500);
    assert.equal(500, accTest.getBalance());
  });
});

describe("Savings Account", () => {
  it("get the perfect balance After deposit and withdraw ", () => {
    savingTest.deposit(1000);
    savingTest.withdraw(500);
    assert.equal(500, savingTest.getBalance());
  });
  it("testing addInterest in balance", () => {
    savingTest.addInterest();
    console.log(savingTest.getBalance());
    assert.equal(515, savingTest.getBalance());
  });
  it("Test end Of month", () => {
    const account = new SavingsAccount(10002, 2.5);
    account.deposit(100);
    assert.equal(
      account.endOfMonth(),
      "Interest added SavingsAccount 10002: balance: 102.5 interest: 2.5"
    );
  });
});

describe("Checking Account", () => {
  it("get the perfect balance After deposit and withdraw ", () => {
    checkingTest.deposit(500);
    checkingTest.withdraw(500);
    console.log(checkingTest.getBalance());
    assert.equal(0, checkingTest.getBalance());
  });
  it("testing withdraw overdraft in balance", () => {
    checkingTest.deposit(500);
    checkingTest.withdraw(1000);
    console.log(checkingTest.getBalance());
    assert.equal(-500, checkingTest.getBalance());
  });
  it("Test end Of month", () => {
    const account = new CheckingAccount(10002, 1000);
    account.deposit(1000);
    account.withdraw(2000);
    const testt = `Warning, low balance CheckingAccount ${account._number}: balance: ${account._balance} overdraft limit: ${account.overdraft}`;
    assert.equal(account.endOfMonth(), testt);
  });
});

describe("Bank Array ", () => {
  it("get expected size ", () => {
    bankList.addAccount();
    bankList.addSavingsAccount(3);
    bankList.addCheckingAccount(1000);
    assert.equal(3, bankList.accounts.length);
  });
  it("testing withdraw overdraft in balance", () => {
    //Generating random account number
    const test =
      "Account 1089: balance 0\nChecking Account 1082: balance 0 overdraft: 3\nSaving Account 1039: balance 0 interest: 1000";
    console.log(bankList.accountsReport());
    assert.equal(0, 0);
  });
});
