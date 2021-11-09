# MySQL Statements

## IDs
- **UUID** - Universally Unique IDentifier.  The unique value that identifies an ID
    - uuid generator website: https://www.uuidgenerator.net/
    - We use version 4 UUIDs, which are randomly created
        - chance of collision between two UUIDs is vanishingly small: 1 in 2^122, or approximately 1 in 5.3x10^35 or 1 in 5,300,000,000,000,000,000,000,000,000,000,000,000
- Our UUIDs need to be modified to fit into the DB
    - remove dashes
    - `UUID_TO_BIN()` and `BIN_TO_UUID()` - MySQL functions that translate to and from hexidecimal numbers
    - All UUIDs are in hexidecimal, and should be converted to binary using `UUID_TO_BIN()` before being stored in the DB.
    - UUIDs retrieved from the database will have to be translated back into hexidecimal using `BIN_TO_UUID()` to make them human readable.
    - https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_uuid-to-bin
- MySQL reserve word syntax can be capitalized or lowercase.  You can use either, but *you have to be consistent*.

## INSERT
- adds (i.e. inserts) data into the database
- Each item in the database is a single instance of an entity.
    - In database nomenclature, this is known as a **record** or **row**
    - In this context, an entity is an abstract category, like "Profile".  An instance is a specific item, like "Paul"
- `INSERT INTO row (column1, column,2, column3, column4) VALUES ("value1", "value2", "value3", "value4");`
- `INSERT INTO profile(profileId, profileActivationToken, profileAtHandle, profileEmail, profileHash, profilePhone) VALUES (UUID_TO_BIN("4d7342ff55c0483097a0da7b2b6a9d9d"), "nananananananananananananananana", "myAtHandle", "email@email.com", "nanananananananananananananananananananananananananananananananananananananananananananananananaa", "505-866-5309");`

### Inserting into tables with Foreign keys.
- `INSERT INTO tweet(tweetId, tweetProfileId, tweetContent, tweetDate) VALUES (UUID_TO_BIN("2435f00e555d455d92fdf34f1dd255e2"), UUID_TO_BIN("4d7342ff55c0483097a0da7b2b6a9d9d"), "I hate dates because I never get them", NOW());`
    - FOREIGN KEYS MUST EXIST IN THE PARENT TABLE OR MYSQL WILL THROW A FOREIGN KEY CONSTRAINT VIOLATION.
    - dates must be in the format year-month-day hour:minute:second, or use the now() function in MySQL.
    - NOW() is a built in MYSQL function that returns the current server time.

## UPDATE
- Updates records/rows in a database.
- `UPDATE table SET colunm1 = newValue1, column2 = newValue2, WHERE primaryKey = uuid;`
- `UPDATE tweet SET tweetProfileId = UUID_TO_BIN("4d7342ff55c0483097a0da7b2b6a9d9d"), tweetContent="I get dates now" tweetDate = NOW() WHERE tweetId = UUID_TO_BIN("2435f00e555d455d92fdf34f1dd255e2");`
- `WHERE` specifies what record you are trying to update/delete/select.
    - For the most part you will be using primary keys to specify what you are updating/deleting
    - Generally a bad idea to update foreign keys.
    - With set you can specify what columns you are trying to update.

## DELETE
- deletes a record in the database.
- `DELETE FROM table WHERE primayKey = uuid;`
- `DELETE FROM tweet WHERE tweetId = UUID_TO_BIN("2435f00e555d455d92fdf34f1dd255e2");`
- make sure you have a where with delete or else you will delete every record in the table.

## SELECT
- SELECT grabs data from the database.
- SELECT accounts for ≈ 70% of database operations
- `SELECT  column1, column2, column3, column4, from table WHERE condition = true;`
- `SELECT tweetId, tweetProfileId, tweetContent, tweetDate from tweet WHERE tweetProfileId = UUID_TO_BIN("2435f00e555d455d92fdf34f1dd255e2");`
    - Statement grabs all tweets from user `"2435f00e555d455d92fdf34f1dd255e2 SELECT tweetId, tweetProfileId, tweetContent, tweetDate from tweet WHERE tweetContent LIKE "%fuzzy%"`;
    - like allows for partial matchs https://www.tutorialspoint.com/mysql/mysql-like-clause.htm
    - can use an equality after the where statement.

## JOINS
### Simple joins
- `SELECT tableA.column1, tableA.column2, tableA.column3, tableB.column3 FROM tableA INNER JOIN tableB on tableA.primaryKeyA = tableB.foreignKeyA WHERE tableA.column = true`
- `SELECT tweet.tweetId,  tweet.tweetProfileId,  tweet.tweetContent, tweet.tweetDate FROM tweet INNER JOIN profile on tweet.tweetProfileId = profile.profileId where tweet.tweetContent = "California"`
### Complex joins
- `SELECT tweet.tweetId, tweet.tweetProfileId, tweet.tweetContent, tweet.tweetDate, profile.profileAtHandle FROM 'like' INNER JOIN tweet ON tweet.tweetId = like.likeTweetId INNER JOIN profile ON profile.profileId = like.likeProfileId WHERE like.likeTweetId = uuid`
