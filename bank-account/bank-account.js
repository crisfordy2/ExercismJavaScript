export class BankAccount {

  open() {
    if (this._balance !== undefined) {
      throw new ValueError();
    }
    this._balance = 0;
  }

  close() {
    if (this._balance === undefined) {
      throw new ValueError();
    }
    this._balance = undefined;
  }

  deposit(amount) {
    if (amount < 0 || this._balance === undefined) {
      throw new ValueError();
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance || amount < 0) {
      throw new ValueError();
    }
    this._balance -= amount;
  }

  get balance() {
    if (this._balance === undefined) {
      throw new ValueError();
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}