# Data Design, Entities, & Keys

## Data Design

**data design** - how an application's data is stored and retrieved
- Some data is calculated on demand:
    - total price of an order
    - number of likes
    - number of seats available
-	Some data is rarely or never changed, but must be stored
- specific line on a specific order
- user foo liked tweet bar
- user foo purchased seat R15

## Entities, Attributes, & Relationships
- **entity** - the most general "container" for data within data design
- **attribute** - a property of an entity that contains information about that entity
-	attributes are what compose an entity and contain one specific aspect of an entity
- Generally 10 or fewer attributes to an entity
- How to identify entities
    - Pull out the nouns from your user story.
    - Nouns will usually be one of the following
        - HTML/CSS interface - if they look the same for every user
        - Calculated values - if they can be counted or otherwise reached by grouping a bunch of other entities together
        - Entities - Usually everything that's left

## Tweet Entity Example
![](baby-hold-tweet.png)
- Attributes
    - tweetContent: what they wrote
    - tweetDateTime: when they wrote it
- Not number of likes!  That gets calculated on demand.
- Not user!  That's another entity.
- Not responses!  Those are also other entities
- How do we make sure those other entities can be found?  We create another entity
    - Class activity: Twitter Profile Entity


## Relationships
- relationship - a link between two entities that symbolizes an interaction between them
    - relationships DO NOT connect to/from attributes
- the most straightforward way of creating a relationship is to read the use case carefully and determine which entities were affected
    - *ownership*: who wrote this tweet? there must be a relation from profile to tweet in order to express this idea
    - *participation*: who is on this train? there must be a relation from profile to trainSchedule in order to express this idea
- three types of relationships:
    - 1-to-1: this relationship occurs 0 or 1 times (e.g., one profile verifies once)
    - 1-to-many: this relationship occurs multiple times, n ≥ 0 (e.g., one profile writes many tweets)
    - many-to-many: this relationship occurs multiple times with multiple actors, m ≥ 0, n ≥ 0 (e.g., many profiles can like many tweets)

## Keys
- primary key -  the unique identifier of an entity
    - cannot be modified once created
    - one immutable way is to increment your keys 1, 2, 3, ..., k
        - opens data up to attackers
    - we use UUIDv4 to generate keys
        - Universally Unique IDentifier
        - mathematically impossible to guess: 2^128 to 1
        - has some information that's verifiable
        - well known algorithm widely used in industry
- foreign key - a primary key from another table copied to a "foreign" table
    - these are how relationships are implemented
    - prevent the copy of the primary key from ever drifting from the original parent
    - foreign keys act as "pointers" that reference another entity

## Entity Relationship Diagrams and Relational Models
- entity relationship diagram (ERD) - a visual way of representing the entities and relationships that hold an application's data
- Example: http://ddc-web-curriculum.cnm.edu/data-design-project-overview/
- We use crows-foot notation for our ERDs
    - Entities are represented as rectangles with singular titles
    - attributes are listed as a column inside the entity
    - relationships are represented with different types of crow’s feet that describes the relationship
- draw.io

## Cardinal rules of Keys and relationships
- **Every relationship will have exactly one foreign key.**
- **Every relationship will be 1 to many.**
    - If you have a 1-to-1 relationship, combine these two entities into a single entity
    - If you have a many-to-many relationship, create a weak entity between the entity with both foreign keys
- **The foreign key goes on the "many" side of a 1-to-many relationship.**

## Creating a Weak Entity: Cafeteria cash register example
Goal: Add up a customer's bill, and store the information about their purchases so that they can access all of their orders later if requested.

### Strong entities

customer
- customerId
- customerName

dish (ignoring customizations for simplicity's sake)
- dishId
- dishName
- dishPrice

bill
- billId
- billCustomerId
- billDateTime

### relationships
- customers and bills: 1 to many
    - Each bill is for one customer only (no splitting in our example)
    - one customer can come in multiple times to our restaurant
- dishes and bills: many-to-many
    - Each bill can have multiple dishes
    - Each dish can appear on multiple bills
    - We have to create a weak entity to encapsulate this relationship
- customers and dishes
    - we don't need a relationship for this, because we can get relate dishes to bills, and from there to customers.

### Weak entity

billDish (weak entity)
- billDishBillId
- billDishDishId
- billDishQuantity
