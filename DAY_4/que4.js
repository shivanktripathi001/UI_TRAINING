class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.accountHolder} deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    this.balance -= amount;
    console.log(`${this.accountHolder} withdrew ${amount}. New balance: ${this.balance}`);
  }

  checkBalance() {
    console.log(`${this.accountHolder}'s balance: ${this.balance}`);
  }
}

// Create 2 accounts
const account1 = new BankAccount("Aarjav", 10000);
const account2 = new BankAccount("Shivank", 15000);

// Perform transactions
account1.checkBalance();
account1.deposit(5000);
account1.withdraw(2000);
account1.checkBalance();

console.log("---");

account2.checkBalance();
account2.deposit(3000);
account2.withdraw(1000);
account2.checkBalance();
