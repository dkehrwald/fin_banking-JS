/**
 * shared methods for various account types
 * @constructor
 */
Accounts = function() {};

/**
 * creates the red account box
 * @returns {Element}
 */
Accounts.prototype.createAccountBox = function() {
    var accountBox = document.createElement("div");
    accountBox.className = "account-box";

    return accountBox
};

/**
 * adds the standard displays to the account box that every account shares
 * @param accountBox
 * @param obj
 */
Accounts.prototype.addStandardToBox = function(accountBox, obj) {
    accountBox.appendChild(this.addDisplay(obj.accountName, "Account Name: "));
    accountBox.appendChild(this.addDisplay(obj.balance, "Account Balance: "));
};

/**
 * Method for creating text display
 * @param text
 * @param label
 * @returns {Element}
 */
Accounts.prototype.addDisplay = function(text, label) {
    var div = document.createElement('div');
    var labelSpan = document.createElement('span');
    labelSpan.innerHTML = label;
    labelSpan.className = "account-labels";
    div.appendChild(labelSpan);
    var inputSpan = document.createElement("span");
    inputSpan.innerHTML = text;
    inputSpan.className = "account-labels";
    div.appendChild(inputSpan);
    return div;
};
