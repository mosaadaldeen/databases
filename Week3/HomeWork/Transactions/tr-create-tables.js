var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});

connection.connect();
const query = [
    `create table if not exists account(
        account_number int AUTO_INCREMENT Primary Key, 
        balance int
    );`,

    `create table if not exists account_changes(
        change_number int AUTO_INCREMENT Primary Key, 
        account_number int,
        amount int,
        changed_date date, 
        remark varchar(25),
        CONSTRAINT FK_Account FOREIGN KEY(account_number) REFERENCES account(account_number)
    );`,


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