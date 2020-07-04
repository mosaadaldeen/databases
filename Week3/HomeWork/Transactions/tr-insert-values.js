var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});

connection.connect();
const query = [
    `delete from account;`,
    `delete from account_changes;`,
    `insert into account values(101, 1200)`,
    `insert into account values(102, 1400)`,
    `insert into account values(103, 1600)`,
    `insert into account values(104, 1800)`,
    `insert into account values(105, 2000)`,
    `insert into account values(106, 2200)`,

    `insert into account_changes values(null, 103, 2300, '2020-04-22', 'person3')`,
    `insert into account_changes values(null, 104, 2400, '2020-04-23', 'person4')`,
    `insert into account_changes values(null, 105, 1500, '2020-04-24', 'person5')`,
    `insert into account_changes values(null, 106, 2700, '2020-04-25', 'person6')`,
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