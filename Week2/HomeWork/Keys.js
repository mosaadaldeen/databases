const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
});
connection.connect();

const query = [
    `create table if not exists Authors(
    author_no int AUTO_INCREMENT Primary Key, 
    author_name varchar(100), 
    university varchar(100), 
    date_of_birth DATE, h_index int , 
    gender enum('m', 'f'), 
    collaborator int
    );`,

    `alter table Authors 
    add CONSTRAINT fk_author
    FOREIGN KEY (collaborator) REFERENCES Authors(author_no)
    `,
    `create table Research_Papers(
      paper_id int AUTO_INCREMENT primary key, 
      paper_title varchar(100),
      publish_date date, 
      conference varchar(100),
      collaborator int,
      CONSTRAINT fk_paper
    FOREIGN KEY (collaborator) 
        REFERENCES Authors(author_no)
    );`,

    `SET FOREIGN_KEY_CHECKS=0;`,
    `delete from Authors`,
    `insert into Authors values(1, 'author1', 'Rotterdam', '1980-11-11',112, 'm', null)`,
    `insert into Authors values(2, 'author1', 'Rotterdam', '1980-11-11',112, 'm', 1)`,
    `insert into Authors values(3, 'author2', 'Amsterdam', '2000-01-01',113, 'm', 2)`,
    `insert into Authors values(4, 'author2', 'Amsterdam', '1990-11-11',114, 'f', 3)`,
    `insert into Authors values(5, 'author2', 'Amsterdam', '1991-11-11',115, 'm', 4)`,
    `insert into Authors values(6, 'author3', 'MIT', '1995-11-11',116, 'f', 5)`,
    `insert into Authors values(7, 'author3', 'MIT', '1999-11-11',117, 'm', 5)`,
    `insert into Authors values(8, 'author4', 'Rotterdam', '2000-11-22',118, 'f', 4)`,
    `insert into Authors values(9, 'author4', 'Rotterdam', '2002-12-11',119, 'm', 4)`,
    `insert into Authors values(10, 'author4', 'Erasmus', '1998-10-21',120, 'm', 3)`,
    `insert into Authors values(11, 'author5', 'Erasmus', '1995-04-10',121, 'f', 3)`,
    `insert into Authors values(12, 'author5', 'Amsterdam', '2003-05-11',122, '2', 3)`,
    `insert into Authors values(13, 'author5', 'Erasmus', '1997-01-31',123, 'f', 2)`,
    `insert into Authors values(14, 'author1', 'Rotterdam', '1992-12-21',124, 'm', 2)`,
    `insert into Authors values(15, 'author4', 'MIT', '1993-01-10',125, 'm', 5)`,
    `SET FOREIGN_KEY_CHECKS=1;`,

    `SET FOREIGN_KEY_CHECKS=0;`,
    `delete from Research_Papers`,
    `insert into Research_Papers values(null, 'paper1', '2014-11-11', 'conference1',1)`,
    `insert into Research_Papers values(null, 'paper2', '2014-11-11', 'conference2',1)`,
    `insert into Research_Papers values(null, 'paper3', '2014-11-11', 'conference3',5)`,
    `insert into Research_Papers values(null, 'paper4', '2014-11-11', 'conference4',4)`,
    `insert into Research_Papers values(null, 'paper5', '2014-11-11', 'conference5',2)`,
    `insert into Research_Papers values(null, 'paper6', '2014-11-11', 'conference6',1)`,
    `insert into Research_Papers values(null, 'paper7', '2014-11-11', 'conference7',3)`,
    `insert into Research_Papers values(null, 'paper8', '2014-11-11', 'conference8',4)`,
    `insert into Research_Papers values(null, 'paper9', '2014-11-11', 'conference9 ',3)`,
    `insert into Research_Papers values(null, 'paper10', '2014-11-11', 'conference10',3)`,
    `insert into Research_Papers values(null, 'paper11', '2014-11-11', 'conference11',2)`,
    `insert into Research_Papers values(null, 'paper12', '2014-11-11', 'conference12',1)`,
    `insert into Research_Papers values(null, 'paper13', '2014-11-11', 'conference13',1)`,
    `insert into Research_Papers values(null, 'paper14', '2014-11-11', 'conference14',2)`,
    `insert into Research_Papers values(null, 'paper15', '2014-11-11', 'conference15',1)`,
    `insert into Research_Papers values(null, 'paper16', '2014-11-11', 'conference16',2)`,
    `insert into Research_Papers values(null, 'paper17', '2014-11-11', 'conference17',3)`,
    `insert into Research_Papers values(null, 'paper18', '2014-11-11', 'conference18',5)`,
    `insert into Research_Papers values(null, 'paper19', '2014-11-11', 'conference19',5)`,
    `insert into Research_Papers values(null, 'paper20', '2014-11-11', 'conference20',4)`,
    `insert into Research_Papers values(null, 'paper21', '2014-11-11', 'conference21',4)`,
    `insert into Research_Papers values(null, 'paper22', '2014-11-11', 'conference22',3)`,
    `insert into Research_Papers values(null, 'paper23', '2014-11-11', 'conference23',2)`,
    `insert into Research_Papers values(null, 'paper24', '2014-11-11', 'conference24',2)`,
    `insert into Research_Papers values(null, 'paper25', '2014-11-11', 'conference25',2)`,
    `insert into Research_Papers values(null, 'paper26', '2017-06-24', 'conference26',3)`,
    `insert into Research_Papers values(null, 'paper27', '2013-10-22', 'conference27',3)`,
    `insert into Research_Papers values(null, 'paper28', '2015-09-28', 'conference28',4)`,
    `insert into Research_Papers values(null, 'paper29', '2014-10-21', 'conference29',4)`,
    `insert into Research_Papers values(null, 'paper30', '2018-10-01', 'conference30',5)`,
    `SET FOREIGN_KEY_CHECKS=1;`,

    // Write a query that prints names of all Authors and their corresponding Collaborators.
    `SELECT A.author_name, C.author_name from authors A    
    JOIN authors C
      ON C.author_no = A.Collaborator;`,

    // Write a query that prints all columns of Authors and their pubished paper_title. If there is an author without any Research_Papers, print the information of that Author too.
    `select Authors.*, Research_Papers.paper_title from Authors 
      left join Research_Papers ON Research_Papers.paper_id = Authors.author_no;`,

    //All research papers and the number of authors that wrote that paper.
    `select paper_title, sum(collaborator) as numOfCollaborators from Research_Papers 
    group by paper_title;`,

    //Sum of the research papers published by all female authors.
    `select count(gender) from Authors where gender = 'f';`,

    //Average of the h-index of all authors per university.
    `select University, avg(h_index) as Average from Authors group by university;`,

    //Sum of the research papers of the authors per university.
    `select a.university, count(b.paper_title) from Authors a join Research_Papers b on author_no = paper_id group by university;`,

    //Minimum and maximum of the h-index of all authors per university.
    `select university, min(h_index) as MIN, max(h_index) as MAX from Authors group by university;`
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