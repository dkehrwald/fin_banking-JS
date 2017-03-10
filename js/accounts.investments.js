/**
 * Method for investment style accounts
 * @param account the current cash account
 */
Accounts.investments = function(account) {
    Accounts.call(this, account);
    this.account = account;
};
Accounts.investments.prototype = new Accounts();

/**
 * Creates the account display box for the account
 * @param {Object} box account box object
 */
Accounts.investments.prototype.createAccountDisplay = function(box) {
    var accountBox = this.createAccountBox();
    accountBox.appendChild(this.addDisplay("Investment Account", "Type of Account: "));
    this.addStandardToBox(accountBox, this.account);
    accountBox.appendChild(this.addDisplay(this.account.holdings, "Holdings: "));

    box.appendChild(accountBox);
};
