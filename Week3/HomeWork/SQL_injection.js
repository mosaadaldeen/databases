var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'world'
});

connection.connect();

function getPopulation(Country, name, code, cb) {
    connection.query(
        `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = ${code}`,
        function(err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(result);
        }
    );
}

getPopulation('country', 'Albania', 'ALB;select * from country', (result) => {
    console.log(result);
});

// the function that it is no longer vulnerable to SQL injection
function getPopulation(Country, name, code, cb) {
    connection.query(
        `SELECT Population FROM ${Country} WHERE Name = ? and code = ?`, [name, code],
        function(err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(result);
        }
    );
}

getPopulation('country', 'Benin', 'BEN', (result) => {
    console.log(result);
});

connection.end();