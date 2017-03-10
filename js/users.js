/**
 * User object and methods for creating User display box
 * @param userData
 * @constructor
 */
Users = function(userData) {
    this.userData = userData;
};

/**
 * Creates the user display box
 */
Users.prototype.displayUserInfo = function() {
    var box = document.createElement("div");
    box.className = "user-box";
    box.appendChild(this.addDisplay(this.userData.firstName));
    box.appendChild(this.addDisplay(this.userData.lastName));
    box.appendChild(this.addDisplay(this.userData.phone));
    box.appendChild(this.addDisplay(this.userData.email));

    this.userData.accounts.forEach(function(obj, i) {
        var account;
        switch(obj.accountType.valueOf()) {
            case 1:
                account = new Accounts.investments(obj);
                break;
            case 2:
                account = new Accounts.cash(obj);
                break;
            case 3:
                account = new Accounts.debt(obj);
                break;
            default:
                account = new Accounts(obj);
        }
        account.createAccountDisplay(box);
    });

    $(".main-area").append(box);
};

/**
 * common method for creating display for text
 * @param text
 * @returns {Element}
 */
Users.prototype.addDisplay = function(text) {
    var labelSpan = document.createElement("span");
    labelSpan.innerHTML = text;
    labelSpan.className = "text-labels";
    return labelSpan;
};
