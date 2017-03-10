/**
 * Method for debt style accounts
 * @param account the current cash account
 */
Accounts.debt = function(account) {
    Accounts.call(this, account);
    this.account = account;
};
Accounts.debt.prototype = new Accounts();

/**
 * Creates the account display box for the account
 * @param {Object} box account box object
 */
Accounts.debt.prototype.createAccountDisplay = function(box) {
    var accountBox = this.createAccountBox();
    accountBox.appendChild(this.addDisplay("Debt Account", "Type of Account: "));
    this.addStandardToBox(accountBox, this.account);

    box.appendChild(accountBox);
};