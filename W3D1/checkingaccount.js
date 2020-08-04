class CheckingAccount extends Account {
  constructor(numb,overdrft) {
    super(numb);
    this.overdraft = overdrft
  }

  set overdraft(amt){
    this._overdraft = amt
  }

  get overdraft(){
    return this._overdraft;
  }

  withdraw(amount){
    if(!((this._balance - amount) < -this.overdraft)){
      this._balance -= amount
    }
  }

  toString() {
      return "Checking Account " + this._number + ": balance " + this._balance+ " overdraft: "+ this.overdraft;
  }

  endOfMonth() {
    if(this._balance < 0){
      return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this.overdraft}`;
    }
      return ""; // does nothing
  }

}
