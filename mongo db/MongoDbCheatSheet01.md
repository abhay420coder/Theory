
# Cheat Sheet Of MongoDB by MongoDB-Offcial-Site

## Connect MongoDB Shell

``` MongoDB

mongo # connects to mongodb://127.0.0.1:27017 by default
mongo --host <host> --port <port> -u <user> -p <pwd> # omit the password if you want a prompt
mongo "mongodb://192.168.1.1:27017"
mongo "mongodb+srv://cluster-name.abcde.mongodb.net/<dbname>" --username <username> # MongoDB Atlas

```
> To connect with the new mongosh, just replace mongo by mongosh.

## Helpers

### Show Databases

``` MongoDB

show dbs
db // prints the current database

```
### Switch Database

``` MongoDB

use <database_name>

```
### Show Collections
``` MongoDB

show collections

```

### SRun JavaScript File
``` MongoDB

load("myScript.js")

```

## CRUD

### Create

``` MongoDB

db.coll.insertOne({name: "Max"})
db.coll.insert([{name: "Max"}, {name:"Alex"}]) // ordered bulk insert
db.coll.insert([{name: "Max"}, {name:"Alex"}], {ordered: false}) // unordered bulk insert
db.coll.insert({date: ISODate()})
db.coll.insert({name: "Max"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})

```

### Read

``` MongoDB

db.coll.findOne() // returns a single document
db.coll.find()    // returns a cursor - show 20 results - "it" to display more
db.coll.find().pretty()
db.coll.find({name: "Max", age: 32}) // implicit logical "AND".
db.coll.find({date: ISODate("2020-09-25T13:57:17.180Z")})
db.coll.find({name: "Max", age: 32}).explain("executionStats") // or "queryPlanner" or "allPlansExecution"
db.coll.distinct("name")

// Count
db.coll.count({age: 32})          // estimation based on collection metadata
db.coll.estimatedDocumentCount()  // estimation based on collection metadata
db.coll.countDocuments({age: 32}) // alias for an aggregation pipeline - accurate count

// Comparison
db.coll.find({"year": {$gt: 1970}})
db.coll.find({"year": {$gte: 1970}})
db.coll.find({"year": {$lt: 1970}})
db.coll.find({"year": {$lte: 1970}})
db.coll.find({"year": {$ne: 1970}})
db.coll.find({"year": {$in: [1958, 1959]}})
db.coll.find({"year": {$nin: [1958, 1959]}})

// Logical
db.coll.find({name:{$not: {$eq: "Max"}}})
db.coll.find({$or: [{"year" : 1958}, {"year" : 1959}]})
db.coll.find({$nor: [{price: 1.99}, {sale: true}]})
db.coll.find({
  $and: [
    {$or: [{qty: {$lt :10}}, {qty :{$gt: 50}}]},
    {$or: [{sale: true}, {price: {$lt: 5 }}]}
  ]
})

// Element
db.coll.find({name: {$exists: true}})
db.coll.find({"zipCode": {$type: 2 }})
db.coll.find({"zipCode": {$type: "string"}})

// Aggregation Pipeline
db.coll.aggregate([
  {$match: {status: "A"}},
  {$group: {_id: "$cust_id", total: {$sum: "$amount"}}},
  {$sort: {total: -1}}
])

// Text search with a "text" index
db.coll.find({$text: {$search: "cake"}}, {score: {$meta: "textScore"}}).sort({score: {$meta: "textScore"}})

// Regex
db.coll.find({name: /^Max/})   // regex: starts by letter "M"
db.coll.find({name: /^Max$/i}) // regex case insensitive

// Array
db.coll.find({tags: {$all: ["Realm", "Charts"]}})
db.coll.find({field: {$size: 2}}) // impossible to index - prefer storing the size of the array & update it
db.coll.find({results: {$elemMatch: {product: "xyz", score: {$gte: 8}}}})

// Projections
db.coll.find({"x": 1}, {"actors": 1})               // actors + _id
db.coll.find({"x": 1}, {"actors": 1, "_id": 0})     // actors
db.coll.find({"x": 1}, {"actors": 0, "summary": 0}) // all but "actors" and "summary"

// Sort, skip, limit
db.coll.find({}).sort({"year": 1, "rating": -1}).skip(10).limit(3)

// Read Concern
db.coll.find().readConcern("majority")

```

### Update

``` MongoDB

db.coll.update({"_id": 1}, {"year": 2016}) // WARNING! Replaces the entire document
db.coll.update({"_id": 1}, {$set: {"year": 2016, name: "Max"}})
db.coll.update({"_id": 1}, {$unset: {"year": 1}})
db.coll.update({"_id": 1}, {$rename: {"year": "date"} })
db.coll.update({"_id": 1}, {$inc: {"year": 5}})
db.coll.update({"_id": 1}, {$mul: {price: NumberDecimal("1.25"), qty: 2}})
db.coll.update({"_id": 1}, {$min: {"imdb": 5}})
db.coll.update({"_id": 1}, {$max: {"imdb": 8}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": true}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": {$type: "timestamp"}}})

// Array
db.coll.update({"_id": 1}, {$push :{"array": 1}})
db.coll.update({"_id": 1}, {$pull :{"array": 1}})
db.coll.update({"_id": 1}, {$addToSet :{"array": 2}})
db.coll.update({"_id": 1}, {$pop: {"array": 1}})  // last element
db.coll.update({"_id": 1}, {$pop: {"array": -1}}) // first element
db.coll.update({"_id": 1}, {$pullAll: {"array" :[3, 4, 5]}})
db.coll.update({"_id": 1}, {$push: {scores: {$each: [90, 92, 85]}}})
db.coll.updateOne({"_id": 1, "grades": 80}, {$set: {"grades.$": 82}})
db.coll.updateMany({}, {$inc: {"grades.$[]": 10}})
db.coll.update({}, {$set: {"grades.$[element]": 100}}, {multi: true, arrayFilters: [{"element": {$gte: 100}}]})

// Update many
db.coll.update({"year": 1999}, {$set: {"decade": "90's"}}, {"multi":true})
db.coll.updateMany({"year": 1999}, {$set: {"decade": "90's"}})

// FindOneAndUpdate
db.coll.findOneAndUpdate({"name": "Max"}, {$inc: {"points": 5}}, {returnNewDocument: true})

// Upsert
db.coll.update({"_id": 1}, {$set: {item: "apple"}, $setOnInsert: {defaultQty: 100}}, {upsert: true})

// Replace
db.coll.replaceOne({"name": "Max"}, {"firstname": "Maxime", "surname": "Beugnet"})

// Save
db.coll.save({"item": "book", "qty": 40})

// Write concern
db.coll.update({}, {$set: {"x": 1}}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})

```

or

``` MongoDB

db.coll.update(
    {
        "_id": 1
    }, 

    {
        "year": 2016
    }
) // WARNING! Replaces the entire document


db.coll.update(
    {
        "_id": 1
    }, 

    {
        $set: {
            "year": 2016, 
            name: "Max"
            }
    }
)


db.coll.update(
    {
        "_id": 1
    },

    {
        $unset: {
            "year": 1
            }
    }
)


db.coll.update(
  {
    "_id": 1
    }, 
    
  {
    $rename: {
      "year": "date"
      } 
  }
)


db.coll.update(
  {
    "_id": 1
  }, 
  
  {
    $inc: {
      "year": 5
      }
  }
)


db.coll.update(
  {
    "_id": 1
    }, 
    
  {
    $mul: {
      price: NumberDecimal("1.25"), 
      qty: 2
      }
  }
)


db.coll.update(
  {
    "_id": 1
  }, 
  
  {
    $min: {
      "imdb": 5
      }
  }
)

db.coll.update({"_id": 1}, {$max: {"imdb": 8}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": true}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": {$type: "timestamp"}}})

// Array
db.coll.update({"_id": 1}, {$push :{"array": 1}})
db.coll.update({"_id": 1}, {$pull :{"array": 1}})
db.coll.update({"_id": 1}, {$addToSet :{"array": 2}})
db.coll.update({"_id": 1}, {$pop: {"array": 1}})  // last element
db.coll.update({"_id": 1}, {$pop: {"array": -1}}) // first element
db.coll.update({"_id": 1}, {$pullAll: {"array" :[3, 4, 5]}})
db.coll.update({"_id": 1}, {$push: {scores: {$each: [90, 92, 85]}}})
db.coll.updateOne({"_id": 1, "grades": 80}, {$set: {"grades.$": 82}})
db.coll.updateMany({}, {$inc: {"grades.$[]": 10}})
db.coll.update({}, {$set: {"grades.$[element]": 100}}, {multi: true, arrayFilters: [{"element": {$gte: 100}}]})

// Update many
db.coll.update(
  {
    "year": 1999
  }, 
    
  {
    $set: {
      "decade": "90's"
      }
  }, 
  
  {
    "multi":true
  }
)


db.coll.updateMany(
  {
    "year": 1999
  }, 
  
  {
    $set: {
      "decade": "90's"
      }
  }
)

// FindOneAndUpdate
db.coll.findOneAndUpdate({"name": "Max"}, {$inc: {"points": 5}}, {returnNewDocument: true})

// Upsert
db.coll.update(
  {
    "_id": 1
  }, 
  
  {
    $set: {
      item: "apple"
      }, 
      
    $setOnInsert: {
      defaultQty: 100
      }
  }, 

  {
    upsert: true
  }
)

// Replace
db.coll.replaceOne(
  {
    "name": "Max"
    }, 

  {
    "firstname": "Maxime", 
    "surname": "Beugnet"
    }
)

// Save
db.coll.save(
  {
    "item": "book", 
    "qty": 40
  }
)

// Write concern
db.coll.update(
    {

    }, 
    
    {
        $set: {
                "x": 1
            }
    }, 
    
    {
        "writeConcern": {
            "w": "majority", "
            wtimeout": 5000
            }
    }
)

```

### Delete

``` MongoDB

db.coll.remove({name: "Max"})
db.coll.remove({name: "Max"}, {justOne: true})
db.coll.remove({}) // WARNING! Deletes all the docs but not the collection itself and its index definitions
db.coll.remove({name: "Max"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})
db.coll.findOneAndDelete({"name": "Max"})

```


## Databases and Collections
### Drop

``` MongoDB

db.coll.drop()    // removes the collection and its index definitions
db.dropDatabase() // double check that you are *NOT* on the PROD cluster... :-)

```

### Create Collection

``` MongoDB

// Create collection with a $jsonschema
db.createCollection("contacts", {
   validator: {$jsonSchema: {
      bsonType: "object",
      required: ["phone"],
      properties: {
         phone: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         email: {
            bsonType: "string",
            pattern: "@mongodb\.com$",
            description: "must be a string and match the regular expression pattern"
         },
         status: {
            enum: [ "Unknown", "Incomplete" ],
            description: "can only be one of the enum values"
         }
      }
   }}
})

```

### Other Collection Functions

``` MongoDB

db.coll.stats()
db.coll.storageSize()
db.coll.totalIndexSize()
db.coll.totalSize()
db.coll.validate({full: true})
db.coll.renameCollection("new_coll", true) // 2nd parameter to drop the target collection if exists

```


## Indexes
### List Indexes

``` MongoDB

db.coll.getIndexes()
db.coll.getIndexKeys()

```

### Create Indexes

``` MongoDB

// Index Types
db.coll.createIndex({"name": 1})                // single field index
db.coll.createIndex({"name": 1, "date": 1})     // compound index
db.coll.createIndex({foo: "text", bar: "text"}) // text index
db.coll.createIndex({"$**": "text"})            // wildcard text index
db.coll.createIndex({"userMetadata.$**": 1})    // wildcard index
db.coll.createIndex({"loc": "2d"})              // 2d index
db.coll.createIndex({"loc": "2dsphere"})        // 2dsphere index
db.coll.createIndex({"_id": "hashed"})          // hashed index

// Index Options
db.coll.createIndex({"lastModifiedDate": 1}, {expireAfterSeconds: 3600})      // TTL index
db.coll.createIndex({"name": 1}, {unique: true})
db.coll.createIndex({"name": 1}, {partialFilterExpression: {age: {$gt: 18}}}) // partial index
db.coll.createIndex({"name": 1}, {collation: {locale: 'en', strength: 1}})    // case insensitive index with strength = 1 or 2
db.coll.createIndex({"name": 1 }, {sparse: true})

```

### Drop Indexes

``` MongoDB

db.coll.dropIndex("name_1")

```

### Hide/Unhide Indexes

``` MongoDB

db.coll.hideIndex("name_1")
db.coll.unhideIndex("name_1")

```


## Handy commands

``` MongoDB

use admin
db.createUser({"user": "root", "pwd": passwordPrompt(), "roles": ["root"]})
db.dropUser("root")
db.auth( "user", passwordPrompt() )

use test
db.getSiblingDB("dbname")
db.currentOp()
db.killOp(123) // opid

db.fsyncLock()
db.fsyncUnlock()

db.getCollectionNames()
db.getCollectionInfos()
db.printCollectionStats()
db.stats()

db.getReplicationInfo()
db.printReplicationInfo()
db.isMaster()
db.hostInfo()
db.printShardingStatus()
db.shutdownServer()
db.serverStatus()

db.setSlaveOk()
db.getSlaveOk()

db.getProfilingLevel()
db.getProfilingStatus()
db.setProfilingLevel(1, 200) // 0 == OFF, 1 == ON with slowms, 2 == ON

db.enableFreeMonitoring()
db.disableFreeMonitoring()
db.getFreeMonitoringStatus()

db.createView("viewName", "sourceColl", [{$project:{department: 1}}])

```

## Change Streams

``` MongoDB

watchCursor = db.coll.watch( [ { $match : {"operationType" : "insert" } } ] )

while (!watchCursor.isExhausted()){
   if (watchCursor.hasNext()){
      print(tojson(watchCursor.next()));
   }
}

```

## Replica Set

``` MongoDB

rs.status()
rs.initiate({"_id": "replicaTest",
  members: [
    { _id: 0, host: "127.0.0.1:27017" },
    { _id: 1, host: "127.0.0.1:27018" },
    { _id: 2, host: "127.0.0.1:27019", arbiterOnly:true }]
})
rs.add("mongodbd1.example.net:27017")
rs.addArb("mongodbd2.example.net:27017")
rs.remove("mongodbd1.example.net:27017")
rs.conf()
rs.isMaster()
rs.printReplicationInfo()
rs.printSlaveReplicationInfo()
rs.reconfig(<valid_conf>)
rs.slaveOk()
rs.stepDown(20, 5) // (stepDownSecs, secondaryCatchUpPeriodSecs)

```

## Sharded Cluster

``` MongoDB

sh.status()
sh.addShard("rs1/mongodbd1.example.net:27017")
sh.shardCollection("mydb.coll", {zipcode: 1})

sh.moveChunk("mydb.coll", { zipcode: "53187" }, "shard0019")
sh.splitAt("mydb.coll", {x: 70})
sh.splitFind("mydb.coll", {x: 70})
sh.disableAutoSplit()
sh.enableAutoSplit()

sh.startBalancer()
sh.stopBalancer()
sh.disableBalancing("mydb.coll")
sh.enableBalancing("mydb.coll")
sh.getBalancerState()
sh.setBalancerState(true/false)
sh.isBalancerRunning()

sh.addTagRange("mydb.coll", {state: "NY", zip: MinKey }, { state: "NY", zip: MaxKey }, "NY")
sh.removeTagRange("mydb.coll", {state: "NY", zip: MinKey }, { state: "NY", zip: MaxKey }, "NY")
sh.addShardTag("shard0000", "NYC")
sh.removeShardTag("shard0000", "NYC")

sh.addShardToZone("shard0000", "JFK")
sh.removeShardFromZone("shard0000", "NYC")
sh.removeRangeFromZone("mydb.coll", {a: 1, b: 1}, {a: 10, b: 10})

```


# Cheat Sheet Of MongoDB by InterviewBit.com

## Advantages and Disadvantages of MongoDB
MongoDB has both pros and cons just like other NoSQL databases. 

> **Pros:**
> 1. Any type of data can be stored in MongoDB, 
>       -   which gives users the flexibility to create as many fields in a document as they desire.
> 2. Documents map to native data types in many programming languages, 
>       -   which provides a means of adding to data. 
>       -   Sharding, which involves dividing data across a cluster of machines, is also achieved by this.
> 3. MongoDB includes its own file system, similar to the Hadoop Distributed File System (HDFS), called GridFS. 
>       -   The file system is primarily used to store files that exceed MongoDB's 16 MB per document BSON size limit.
> 4. MongoDB is also compatible with Spark, Hadoop, and other data processing frameworks like SQL.

>**Cons:**
> 1. When a MongoDB master node goes down, 
>      -   another node will automatically become the new master. 
>      -   Despite the fact that it promises continuity, 
>           -   the automatic failover strategy is not instantaneous - it may take up to a minute. 
>      -   In contrast, the Cassandra NoSQL database supports multiple master nodes, 
>      -   so that if a master goes down, 
>          -   another one is ready to run a highly available database infrastructure.
> 2. Although MongoDB's single master node restricts how fast data can be written to the database, 
>      -   it also limits how much data can be written. 
>      -   Because of this, data writes must be recorded on the master, 
>           -   and new information cannot be added to the database quickly.
> 3. MongoDB doesn't provide full referential integrity using foreign-key constraints, 
>       -   which could affect data consistency.
> 4. User authentication isn't enabled by default in MongoDB databases. 
>       -   Because of this, there is a default setting that blocks networked connections to databases 
>           -   if they've not been configured by a database administrator.
> 5. There have also been instances of ransomware attacks that forced the setting to be turned on by the database administrator.


> **Features of MongoDB**
> 1. **Replication**: 
>       -   The MongoDB replica set feature is known for providing high availability. 
>       -   Two or more copies of data constitute a replica set. 
>       -   A replica-set acts as a primary or a secondary replica. 
>       -   Secondary replicas keep a copy of the data of the primary, 
>           -   preserving it in an orderly manner, as part of a replicated MongoDB system. 
>       -   Whenever a primary replica crashes, 
>           -   the replica set automatically determines which secondary should become the primary and conducts an election if necessary. 
>       -   Secondary replicas may additionally serve read operations, 
>           -   but the data is only eventually consistent by default. 
>       -   To resolve the election of the new primary, 
>           -   three standalone servers must be added as secondary servers. 
> 2. **Indexing**: 
>       -   A MongoDB field can be indexed with primary and secondary indices or indexes. 
>       -   A MongoDB index stores a small portion of the data set in a form that is convenient to traverse. 
>       -   The index stores the value of a particular field, or set of fields, ordered by their value. 
>       -   In MongoDB, indexes assist in efficiently resolving queries by storing a small portion of the data set in a convenient form. 
>       -   A MongoDB index is similar to a typical relational database index. 
> 
> 3. **File storage**: 
>       -   GridFS, which uses MongoDB as a file system, 
>           -   can be used to balance and replicate data across multiple machines. 
>       -   A file can be stored in MongoDB as a grid file system. 
>       -   It has features similar to a file system 
>           -   such as load balancing and data replication.
> 
> 4. **Aggregation**: 
>       -   The aggregation pipeline, the map-reduce function, and single-purpose aggregation methods are available in MongoDB. 
>       -   According to MongoDB's documentation, 
>           -   the Aggregation Pipeline provides better performance 
>           -   for most aggregation operations over map-reduce. 
>       -   With the aggregation framework, 
>           -   users can obtain the kind of results for which the SQL GROUP BY clause is used. 
>       -   The aggregation framework includes $lookup and standard deviation like statistical operators.
> 
> 5. **Sharding**: 
>       -   Sharding is the splitting up of data among machines. 
>       -   To permit this, we refer to it as "partitioning" or "sharding." 
>       -   We may store more data and handle more load 
>           -   without upgrading our machines, 
>           -   by dividing data across them. 
>       -   MongoDB's sharding allows you to split up a collection among many machines (shards), 
>           -   allowing it to grow beyond resource limitations. 



##  To show all databases

``` MongoDB

show dbs

```



## To show current database

``` MongoDB

db

```



## Switch or create database

``` MongoDB

 use acme

```

## Drop a database

``` MongoDB

 db.dropDatabase()

```

## Inserting Document
The MongoDB shell provides the following methods to insert documents into a collection:

``` MongoDB

db.docx.insert({name:'Enterprise',operator:'Star',type:'Explorer',class:'Universe',crew:730,codes:[15,16,17]}) 
db.docx.insert({name:'Prometheus',operator:'Star',class:'Prometheus',crew:40,codes:[10,14,17]})

```

or

``` MongoDB

db.docx.insert(
    {
        name:'Enterprise',
        operator:'Star',
        type:'Explorer',
        class:'Universe',
        crew:730,
        codes:[15,16,17]
    }
) 


db.docx.insert(
    {
        name:'Prometheus',
        operator:'Star',
        class:'Prometheus',
        crew:40,
        codes:[10,14,17]
    }
)

```
## Insert Row
The MongoDB shell provides the following methods to insert rows:

``` MongoDB

db.docx.insert({
 title: 'Post Five',
 body: 'Body of post five,
 category: 'Information',
 tags: ['Information', 'events'],
 user: {
   name: 'David',
   status: 'author'
 },
 date: Date()
})

```
## Insert Multiple Row
The MongoDB shell provides the following methods to insert multiple rows:

``` MongoDB

 db.docx.insertMany([
 {
   title: 'Post six,
   body: 'Body of post six,
   category: 'Science',
   date: Date()
 },
 {
   title: 'Post seven',
   body: 'Body of post seven',
   category: 'Information',
   date: Date()
 },
 {
   title: 'Post eight',
   body: 'Body of post eight',
   category: 'Sports',
   date: Date()
 }
])

```

## Finding document
The MongoDB shell provides the following methods to find documents:

``` MongoDB

S.No.	    Commands	                                        Description
1.          db.docx.findOne()	                                Finds one random document.
2.          db.docx.find().prettyPrint()	                    Finds all documents.
3.          db.docx.find({}, {name:true, _id:false})	        Displays only the names of the document Docx.
4.          db.docx.find({}, {name:true, _id:false})	        Can find one document by attribute among many documents.

```

## Finding Documents using Operators
The MongoDB shell provides the following methods to find documents using operators:

``` MongoDB

Operator	        Description	                                Commands
$gt 	            greater than 	                            db.docx.find({class:{$gt:'T'}
$gte 	            greater than equals	                        db.docx.find({class:{$gt:'T'}
$lt 	            lesser than 	                            db.docx.find({class:{$lt:'T'}
$lte	            lesser than equals	                        db.docx.find({class:{$lte:'T'}
$exists	            does an attribute exist or not	            db.docx.find({class:{$gt:'T'}
$regex	            Matching pattern in pearl-style	            db.docx.find({name:{$regex:'^USS\\sE'}})
$type 	            search by type of an element	            db.docx.find({name : {$type:4}})

```

## Find one row
To find a row, use-

``` MongoDB

db.docx.findOne({ category: 'Science' })

```

## Delete a document
deleteOne and deleteMany can be used for this purpose. Both of these methods take a filter document as their first parameter.

``` MongoDB

db.docx.deleteOne({"_id" : 6})

```

## Delete row
To delete a row, use:

``` MongoDB

db.docx.remove({ title: 'Post six' })

```

## Sort rows
The MongoDB shell provides the following methods to sort rows:

``` MongoDB

# asc
 db.docx.find().sort({ title: 5 }).pretty()

```

``` MongoDB

# desc
 db.docx.find().sort({ title: -5}).pretty()

```

## Count Rows
To count number of rows, use:

``` MongoDB

db.docx.find().count()

```

## Limit rows
To limit the number of rows, use:

``` MongoDB

db.docx.find().limit(5).pretty()

```
## Update one document
- A document stored in the database can be changed using one of several update methods: 
  - updateOne, 
  - updateMany, and 
  - replaceOne. 

- updateOne and updateMany take a filter document as their first parameter and a modifier document, which describes changes to make, as the second parameter.

``` MongoDB

db.docx.updateOne(
    {"_id": 2}, 
    {$set: {
        "title": 'revised title'
        }
    }
)

```

OR

``` MongoDB

db.docx.updateOne({"_id": 2}, {$set: {"title": 'revised title'}})

```
## Update Multiple Document
To update multiple document, use:

``` MongoDB

db.docx.update({"category": "Information"}, {$set: {"category": 'Sports'}}

```
## Update Row
The MongoDB shell provides the following method to update row:

``` MongoDB

db.docx.update({ title: 'Post three' },
{
 title: 'Post three,
 body: 'New body for post 3',
 date: Date()
},
{
 upsert: true
})

```
## Indexes
### List Indexes
It can be done by using:

``` MongoDB

db.docx.getIndexes()

```
### Create Index 

``` MongoDB

db.docx.createIndex({"name": 2})                // single field index
db.docx.createIndex({"name": 2, "date": 2})     // compound index
db.docx.createIndex({foo: "text", bar: "text"}) // text index
db.docx.createIndex({"$**": "text"})            // wildcard text index
db.docx.createIndex({"userMetadata.$**": 1})    // wildcard index

```
### Drop Index 

``` MongoDB

db.docx.dropIndex("name_3")

```
### Hide Indexes 

``` MongoDB

db.docx.hideIndex("name_3")

```
### Unhide Indexes 

``` MongoDB

db.docx.unhideIndex("name_3")

```
### Creating a compound index:

``` MongoDB

db.docx.ensureIndex({name : 3, operator : 1, class : 0})

```
### Dropping a compound index 

``` MongoDB

db.docx.dropIndex({name : 3, operator : 1, class : 0})

```
## Aggregation

``` MongoDB

Operator	        Description	                                                Command
$sum 	            Sum up values 	                                            db.docx.aggregate([{$group : {_id : "$operator", num_docx : {$sum : "$value"}}}])
$avg	            Calculates average values	                                db.docx.aggregate([{$group : {_id : "$operator", num_docx : {$avg : "$value"}}}]) 
$min / $max	        Find min/max values	                                        db.docx.aggregate([{$group : {_id : "$operator", num_docx : {$min : "$value"}}}])
$push 	            Push values to a result array 	                            db.docx.aggregate([{$group : {_id : "$operator", classes : {$push: "$value"}}}])
$addToSet 	        Push values to a result array without duplicates 	        db.docx.aggregate([{$group : {_id : "$operator", classes : {$addToSet : "$value"}}}]) 
$first / $last 	    To get the first / last document 	                        db.docx.aggregate([{$group : {_id : "$operator", last_class : {$last : "$value"}}}])

```
## Databases and Collections

### Drop

``` MongoDB

db.docx.drop()    // removes the collection and its index definitions

```
### Create Collection 

``` MongoDB

// Create collection with a $jsonschema
db.createCollection("contacts", {
validator: {$jsonSchema: {
bsonType: "object",
required: ["gadget"],
properties: {
phone: {
bsonType: "string",
description: "must be a string and is required"
},
email: {
bsonType: "string",
pattern: "@mongodb\.com$",
description: "must be a string and match the regular expression pattern"
 },
    status: {
     enum: [ "Unknown", "Incomplete" ],
     description: "can only be one of the enum values"
     }
     }
     }}
      })

```
### Other Collection Functions 
* In order to create a statistical structure and to copy a pointer into a user-specified memory location, use:

``` MongoDB

db.docx.stats()

```


* The total amount of storage in bytes allocated to the document for document storage can be known by using:

``` MongoDB

db.docx.storageSize()

```


* To report the total size used by the indexes in a collection document, use: 
``` MongoDB

db.docx.totalIndexSize()

```

* The total size in bytes of the data in the collection plus the size of every index can be known by using:
``` MongoDB

db.docx.totalSize()

```
## Some other Handy commands

### use admin

``` MongoDB

db.createUser({"user": "major", "pwd": passwordPrompt(), "roles": ["major"]})
db.dropUser("major")
db.auth( "user", passwordPrompt() )

```
### use test

``` MongoDB

db.getSiblingDB("dbname")
db.currentOp()
db.killOp(345) // opid

```
### Change Streams

``` MongoDB

watchCursor = db.docx.watch( [ { $match : {"operationType" : "insert" } } ] )
while (!watchCursor.isExhausted()){
  if (watchCursor.hasNext()){
     print(tojson(watchCursor.next()));
  }
}

```
### Search in a MongoDb Database: 

``` MongoDB

db.comments.find({lang:'Python'})

```
### Showing All Collections in a Database: 

``` MongoDB

db.getCollectionNames()

```
### Listing a Collection’s Records:  

``` MongoDB

db.collectionname.find()

```
### Listing Records with Matching Values of Specific Fields:  

``` MongoDB

db. collectionname.find({"field2": "secondmatching value"})

```
### Multiple Matching Values: 

``` MongoDB

db. collectionname.find({"field2": "second matching value", "field3": "thirdmatchingvalue"})

```
### Finding a Single Record: 

``` MongoDB

db. collectionname.findOne({"field2": "content"})

```



# MongoDB Cheat Sheet by Brad Traversy

## Show All Databases

```MongoDB
show dbs
```

## Show Current Database

```MongoDB
db
```

## Create Or Switch Database

```MongoDB
use acme
```

## Drop

```MongoDB
db.dropDatabase()
```

## Create Collection

```MongoDB
db.createCollection('posts')
```

## Show Collections

```MongoDB
show collections
```

## Insert Row

```MongoDB
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

## Insert Multiple Rows

```MongoDB
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

## Get All Rows

```MongoDB
db.posts.find()
```

## Get All Rows Formatted

```MongoDB
db.posts.find().pretty()
```

## Find Rows

```MongoDB
db.posts.find({ category: 'News' })
```

## Sort Rows

```MongoDB
# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()
```

## Count Rows

```MongoDB
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

## Limit Rows

```MongoDB
db.posts.find().limit(2).pretty()
```

## Chaining

```MongoDB
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

## Foreach

```MongoDB
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

## Find One Row

```MongoDB
db.posts.findOne({ category: 'News' })
```

## Find Specific Fields

```MongoDB
db.posts.find({ title: 'Post One' }, {
  title: 1,
  author: 1
})
```

## Update Row

```MongoDB
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true
})
```

## Update Specific Field

```MongoDB
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
```

## Increment Field (\$inc)

```MongoDB
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})
```

## Rename Field

```MongoDB
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'
  }
})
```

## Delete Row

```MongoDB
db.posts.remove({ title: 'Post Four' })
```

## Sub-Documents

```MongoDB
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

## Find By Element in Array (\$elemMatch)

```MongoDB
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

## Add Index

```MongoDB
db.posts.createIndex({ title: 'text' })
```

## Text Search

```MongoDB
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

## Greater & Less Than

```MongoDB
db.posts.find({ views: { $gt: 2 } })    // greater than
db.posts.find({ views: { $gte: 7 } })   // greater than or equal to
db.posts.find({ views: { $lt: 7 } })    // less than 
db.posts.find({ views: { $lte: 7 } })   // less than or equal to
```