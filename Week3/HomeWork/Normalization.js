/*
1- How can you convert the table into 1NF ?
food_code and food_description columns have more than one values.
we convert the table to NF1 by making a new raw for the second value in that raw.

2- What are the super, candidate, primary keys in the table created in step (1)?
super keys: member_id - member_name   - member_address - dinner_id - venue_code
candidate keys: { member_id , member_name , member_address}, {dinner_id , dinner_date}, { venue_code ,  venue_description },
primary keys: member_id, dinner_id, 

3- How can you develop the set of 2NF tables? (Think of relationships between different tables).
{    member_id , member_name   , member_address , dinner_id  , venue_code , food_code},
{dinner_id , dinner_date}

4- How can you develop the set of 3NF tables?
{venue_code , venue_description }, {dinner_id , dinner_date}

*/