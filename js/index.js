/**
 * initial method to cycle through users and accounts to create their display
 */
$(document).ready(function() {
    var users = mock_data.data.users;
    users.forEach(function(obj, i) {
        var user = new Users(mock_data.data.users[i]);
        user.displayUserInfo();
    })
});

