var mock_data = {
    "data": {
        "users": [{
            "userId": 1,
            "firstName": "first",
            "lastName": "last",
            "phone": 9133022733,
            "email": "email@aol.com",
            "accounts": [{
                "accountTd": 1,
                "accountType": 1, //investment
                "balance": 500.00,
                "accountName": "my investment account",
                "holdings": "SNAP"
            }]
        },
            {
                "userId": 2,
                "firstName": "First2",
                "lastName": "last2",
                "phone": 193940294,
                "email": "yahoo@yahoo.com",
                "accounts": [{
                    "accountTd": 1,
                    "accountType": 2, //cash
                    "balance": 250.00,
                    "accountName": "cash money"
                }, {
                    "accountTd": 1,
                    "accountType": 3, //debt
                    "balance": 10.50,
                    "accountName": "bad debt"
                }]
            }]
    }
};