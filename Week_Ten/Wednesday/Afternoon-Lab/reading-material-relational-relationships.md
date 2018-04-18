# Relationships in Relational Databases

## One to many

![](https://www.ntu.edu.sg/home/ehchua/programming/sql/images/ManyToOne.png)

One to many relationships in SQL Databases work pretty much just like **referenced** relationships. **There are NO embedded relationships in relational databses.**

You simply put the ID of the "one" resource in the "many" as shown above. This is called a **foreign key**, because it is the key, or ID, of an item in a different table.

#### How to remember which resource gets the foreign key:

You **could** get the same behavior by puttin the ID of the "many" resource in the "one" table.

Say a tree has many oranges.

Our Tree table **could** have an ID of each orange:

Tree                 |  
-----                |                          
ID: 123  |   
height_in_m: 3m |         
orange1_id: 1|  	 	         
orange2_id: 2    |                  
...


But then we have to keep filling up our Tree table with an arbitrary amount or columns with orange IDs. We want the simplest representation of this relationship. That is just having every orange belonging to the tree with an ID of 123 to store that id in a column called **tree_id**

## Many to Many

We didn't cover this in depth in Unit 2 because NoSQL databases are much better at storing complex data, than storing structured data with complex relationships.

Lets dig in.

Let's think about a high school situation where students have many classrooms and classrooms have many students.

How do we do this? We **could** attempt to use the above (wrong) way and put ALL of the student IDs associated with each classroom in each row of the classroom table, AND ALL of the classroom IDs associated with each student in each row on the student table.

But then we are again putting arbitrary amounts of columns in our tables and the end result is not pretty.

![](https://media.giphy.com/media/N9sfGVpuo4p56/giphy.gif)

Fortunately the eggheads of computer science yesteryear have come up with a beautiful, elegant solution: The join table.

#### The Join Table!

![](https://media.giphy.com/media/jDiUeDQpIkGIM/giphy.gif)

![](https://smehrozalam.files.wordpress.com/2010/06/erd-many-to-many-2.jpg)

We use a join table! It's a table with the ID's of BOTH, thus connecting our data across databases! YAY!!!!

A join table might be JUST a join table, meaning it might have nothing but the two IDs, or it might represent something too!

For example, the join table above represents a real thing: **enrollment**! Enrollment might have some of it's own properties, like start and stop dates. Other times, the join table might not really represent anything that has a real life analogy, and it might not need to hold any data besides the ID's.

## Self Referential Many-to-Many

Friends is the typical example. A User can Have Many Friends! But the friends... THEY ARE USERS TWO! WHAA????

Never fear. We just do something like this:

![](https://qph.fs.quoracdn.net/main-qimg-e11cdfc68a24b5afe8a2147f60b7813f)

Ignore the gender part. We still use a join table, in this case called Friendships. It has two user ID's to represent a friendship between these two users.

Another example would be Comments having many Comments. This would work the same way, accept that the join table doesn't really make sense as a thing that is in real life. The table would be called something like CommentsComments.
