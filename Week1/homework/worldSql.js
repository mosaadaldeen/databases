const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'world',
});
connection.connect();

const query = [
    "select * from country where population > 8000000;",
    "select * from country where name like '%land%';",
    "select * from country where population between 500000 and 1000000;",
    "select * from country where Continent = 'Europe';",
    "select * from country order by SurfaceArea desc;",
    'select population from city where Name = "Rotterdam";',
    "select population from country;",
    "select * from country order by SurfaceArea desc limit 10;",
    "select * from country order by population desc limit 10;",
    "select sum(population) from country;"
];
for (let i in query) {
    connection.query(query[i], function(error, result) {
        if (error) {
            throw error;
        }
        console.log("the reply is ", result);
    });
}
connection.end();