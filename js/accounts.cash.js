/**
 * Method for cash style accounts
 * @param account the current cash account
 */
Accounts.cash = function(account) {
    Accounts.call(this, account);
    this.account = account;
};
Accounts.cash.prototype = new Accounts();

/**
 * Creates the account display box for the account
 * @param {Object} box account box object
 */
Accounts.cash.prototype.createAccountDisplay = function(box) {
    var accountBox = this.createAccountBox();
    accountBox.appendChild(this.addDisplay("Cash Account", "Type of Account: "));
    this.addStandardToBox(accountBox, this.account);

    box.appendChild(accountBox);
};
