class BankAccount {
  #balance;
  #transactionHistory;

  constructor() {
    this.#balance = 0;
    this.#transactionHistory = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Сумма депозита должна быть положительной.");
      return;
    }
    this.#balance += amount;
    this.#transactionHistory.push(`DEPOSIT: $${amount}`);
    console.log(
      `На счёт внесено: $${amount}. Текущий баланс: $${this.#balance}`
    );
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Сумма снятия должна быть положительной.");
      return;
    }
    if (amount > this.#balance) {
      console.log("Недостаточно средств для снятия.");
      return;
    }
    this.#balance -= amount;
    this.#transactionHistory.push(`WITHDRAW: $${amount}`);
    console.log(
      `Со счёта снято: $${amount}. Текущий баланс: $${this.#balance}`
    );
  }

  getBalance() {
    return this.#balance;
  }

  audit() {
    console.log("История транзакций:");
    this.#transactionHistory.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction}`);
    });
  }
}

const myAccount = new BankAccount();

myAccount.deposit(1000);
myAccount.withdraw(300);
console.log(`Текущий баланс: $${myAccount.getBalance()}`);
myAccount.audit();
