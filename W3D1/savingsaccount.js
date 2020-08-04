class SavingsAccount extends Account {
  constructor(numb, int) {
    super(numb);
    this.interest = int;
  }
  set interest(int) {
    this._interest = int;
  }
  get interest() {
    return this._interest;
  }
  addInterest() {
    this._balance += ((this._balance * this.interest) / 100)
  }

  toString() {
    return (
      "Saving Account " +
      this._number +
      ": balance " +
      this._balance +
      " interest: " +
      this.interest
    );
  }

  endOfMonth() {
    const intr = ((this._balance * this.interest) / 100)
    this.addInterest()
    return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${intr}`
  }

}
