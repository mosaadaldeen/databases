var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});

connection.connect();
const query = [
    `set autocommit = 0;`,
    `start transaction;`,
    `update account set balance = balance - 1000 where account_number = 101;`,
    `update account set balance = balance + 1000 where account_number = 102;`,
    `INSERT INTO account_changes VALUES(20, 101, 2000, '2020-04-20', 'person1'), (21, 102, 2200, '2020-04-21', 'person2');`,
    `commit;`
];

for (let i in query) {
    connection.query(query[i], function(error, result, fields) {
        if (error) {
            throw error;
        }
        console.log("the reply is ", result);
    });
}
connection.end();