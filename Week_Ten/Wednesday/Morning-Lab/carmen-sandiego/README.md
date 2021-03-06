<!--
Creator: <Name>
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Where In The World Is Carmen Sandiego?

![carmen-sandiego](https://camo.githubusercontent.com/b50a6155810da803a9b420ae0bd403317afd341d/687474703a2f2f692e67697068792e636f6d2f31336e38747852386339554448472e676966)

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

#### Use SQL to find Carmen Sandiego

We're going to use what we've learned already about searching with SQL commands and apply it to chase down and capture an elusive and world-reknowned thief: Carmen Sandiego. Follow the clues and use the interwebs. As you work, write down both the SQL commands/queries you used and your answers to the clues. Your ultimate goal is to figure out where Carmen is headed so we can catch her and bring her in.

## Exercise

#### Starter code

- Fork and clone the repo.

#### Requirements

- Use the clues.sql file as your "answer sheet"
- From the command line, let's create a new database called ```carmen``` and populate it with the SQL found in ```world.sql```

```
cd starter-code

# Enter psql
psql

# Create database
CREATE DATABASE carmen;

# Connect to carmen
\c carmen
\i world.SQL
```

**Pro Tip:** You can do this in one step with the command:

```bash
psql -d carmen -f /your/path/to/this/file/starter-code/world.sql
```

Next, use the clues below to create the appropriate SQL queries to help you find Carmen. Finally, tell us where she's heading!

### The Clues

  - **Clue #1:** We recently got word that someone fitting Carmen Sandiego's description has been traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed, so find the least populated country in Southern Europe and we'll start looking for her there.

  - **Clue #2:** Now that we're here, we have insight that Carmen was seen attending language classes in this country's officially recognized language. Check our databases and find out what language is spoken in this country, so we can call in a translator to work with you.

  - **Clue #3:** We have new news on the classes Carmen attended: our gumshoes tell us she's moved on to a different country, a country where people speak *only* the language she was learning. Find out which nearby country speaks nothing but that language.

  - **Clue #4:** We're booking the first flight out: maybe we've actually got a chance to catch her this time. There are only two cities she could be flying to in the country. One is named the *same* as the country – that would be too obvious a choice for Carmen. We're following our gut on this one; find out what other city in that country she might be flying to.

  - **Clue #5:** Oh no, she pulled a switch: there are two cities with very similar names, but in totally different parts of the globe! She's headed to South America as we speak, so go find a city whose name is *like* the one we were headed to, but with a different ending. Find out the city and do another search for what country it's in. Hurry!

  - **Clue #6:** We're close! Our South American agent says she just got a taxi at the airport, and is headed towards the capital! Look up the country's capital and get there pronto! Send us the name of where you're headed and we'll follow right behind you!

  - **Clue #7:** She knows we're on to her: her taxi dropped her off at the international airport, and she beat us to the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the landing dock. Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but if we can crack it, we can finally put her where she belongs – behind bars.

```
  Our playdate of late has been unusually fun –
  As an agent, I'll say, you've been a joy to outrun.
  And while the food here is great, and the people – so nice!
  I need a little more sunshine with my slice of life.
  So I'm off to add one to the population I find
  In a city of ninety-one thousand and now, eighty five.
```


#### Starter code

Again, be sure to grab the .sql file from the [starter-code](starter-code/world.sql) and run it in your PostgreSQL terminal using the commands above.

#### Deliverable

Use the clues.sql file to write in the SQL queries that correspond with each clue and tell us where she's heading at the bottom:

<p align="center">
  <img src ="https://camo.githubusercontent.com/6a8ae5cf29a3809a0be3c6b792bf433082baee1d/687474703a2f2f73332e706f7374696d672e6f72672f3833383676647434332f53637265656e5f53686f745f323031355f30375f30385f61745f385f31315f32355f504d2e706e67">
</p>


## Additional Resources

- [PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/)
- [PostgreSQL official documentation](http://www.postgresql.org/docs/)
