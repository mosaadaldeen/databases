const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'meetup',
});
connection.connect();

const query = [
    "create table Meeting(meeting_no int, meeting_title varchar(50), starting_time date, ending_time date, room_no int )",
    "create table Invitee(invitee_no int, invitee_name varchar(50), invited_by varchar(50))",
    "create table Room(room_no int, room_name varchar(50), floor_number int)",
    "insert into Invitee values (1, 'Kumar', 'Halm')",
    "insert into Invitee values (2, 'Ali',  'Mo')",
    "insert into Invitee values (3, 'Alaa', 'Saeed')",
    "insert into Invitee values (4, 'john', 'Malcolm')",
    "insert into Invitee values (5, 'kareem', 'Andrew')",
    "insert into Room values (1, 'office', 55)",
    "insert into Room values (2, 'work', 56)",
    "insert into Room values (3, 'meditation', 57)",
    "insert into Room values (4, 'development', 58)",
    "insert into Room values (5, 'marketing', 59)",
    "insert into Meeting values (1, 'teaching', '2019-10-10', '2019-10-10', 23)",
    "insert into Meeting values (2, 'programming', '2019-10-11', '2019-10-12', 24)",
    "insert into Meeting values (3, 'guiding', '2019-10-11', '2019-10-10' , 22)",
    "insert into Meeting values (4, 'helping', '2019-10-10', '2019-10-10', 21)",
    "insert into Meeting values (5, 'marketing', '2019-10-10', '2019-10-10', 20)"
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