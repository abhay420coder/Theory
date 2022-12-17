# What is MongoDB

## What is MongoDB DataBase

>- A **DataBase** is a Structured way to store and access data.

>- A **NoSQL** database is a very generic term _used to describe any data store that doesn't use any legacy approach  to related  tables of data_
>- This meanse that you are storing your data in an organized way **but not in rows and columns**.
>- **An example of NoSQL database** can be anything from a library card catalog _to be more sophisticated data store like MongoDB_.



> **MongoDb** is a **_NoSQL Document DataBase_** .
> \
> This means that data in MongoDB is stored as _**documents**_.
> \
> These Document are stored in _**collection of documents**_.
> \
> That's why MongoDB is categorized as a NoSQL documnet DataBase.
> \
> **Conclusion :-** MongoDB is  a NoSQL documnet DataBase.



![MongoDB vs SQL](./image/Mongodb%20vs%20sql.png)
## What is a Document in MongoDB?

>- **Document** - a way to organize and store data as a set of field-value pairs.
>- **Field** - a unique identifier for a datapoint.
>- **Value** - data related to a given identifier.

 **Syntax of document :-** 
```MongoDb
                    {
                        <field> : <value>
                        <field> : <value>
                    }
```

**Example of a Document :-**      
```MongoDb
                    {
                        "name"  : "Abhay"
                        "title" : "Software Enginner"
                        "Age"   : "23"
                    }
```
>- **Collection** - an organized store of documents in MongoDB, usually with common fields between documents. 
>- There can be many collections per database and many documents per collection.
>- A collection contain many documnents (minimum:- 1 documnet)
>- A dataBase contain  many collection (minimum:- 1 collection)
>- ![Collection in MongoDb](./image/collection%20in%20%20mongodb.png)


## What is MongoDB Atlas?
> The Atlas cloud DataBAse is our full managed DataBase build for a wide range of applications with MongoDB at its core.
![What is Atlas](./image/what%20is%20atlas.png)

>Atlas Users can deploy **clusters** , which are group of servers that stores your data.
> These serves are configure in **replica set** , which is a set of a few connected  MongoDB **instances** that store the same data 
> And Instance is a single machine, locally or in the cloud, running a certain software .
>  - in this case it is the MongoDB database being run in the cloud.

> This setUp ensures that if something happens to one of the machines in the replica set ,
>   -   the data will remain intact and available for use by the application by the remaining working members of the replica set.

> so every time that you make changes to a documnent or a collection , redundant copies of that data are stored within a replica set.

> when you deploy your clusters for this course , it will automatically be configured as a replica set.

![Clusters And Replica set](./image/clusters%20replica%20set.png)

### Atlas gives services 

1. Manage cluster creation
2. Run and maintain database deployment
3. Use cloud service provider of your choice
4. Experiment with new tools and features

![Atlas gives services](./image/Atlas%20gives%20services.png)

### Atlas free tier pricing and features
1. Atlas free tier => Free cluster
2. 3-server replica set
3. 512 MB storage
4. Never expires
![Atlas free tier pricing and features](./image/Atas%20free%20Tier%20price%20service.png)
![Some free tier features](./image/Some%20free%20tier%20features.png)
![MongoDB Online AtasMongoDB Online Atas](./image/MongoDB%20Online%20Atas%20dataBAsed.png)


> 

**Replica Set** - a few connected machines that store the same data to ensure that if something happens to one of the machines the data will remain intact. Comes from the word replicate - to copy something.

**Instance** - a single machine locally or in the cloud, running a certain software, in our case it is the MongoDB database.

**Cluster** - group of servers that store your data.

# MongoDB DataTypes

**MongoDB supports many datatypes. Some of them are −**

1. > **String :−** This is the most commonly used datatype to store the data. String in MongoDB must be UTF-8 valid.
2. > **Integer :−** This type is used to store a numerical value. Integer can be 32 bit or 64 bit depending upon your server.
3. > **Boolean :−** This type is used to store a boolean (true/ false) value.
4. > **Double :−** This type is used to store floating point values.
5. > **Min/ Max keys :−** This type is used to compare a value against the lowest and highest BSON elements.
6. > **Arrays :−** This type is used to store arrays or list or multiple values into one key.
7. > **Timestamp :−** ctimestamp. This can be handy for recording when a document has been modified or added.
8. > **Object :−** This datatype is used for embedded documents.
9. > **Null :−** This type is used to store a Null value.
10. > **Symbol :−** This datatype is used identically to a string; however, it's generally reserved for languages that use a specific symbol type.
11. > **Date :−** This datatype is used to store the current date or time in UNIX time format. You can specify your own date time by creating object of Date and passing day, month, year into it.
12. > **Object ID :−** This datatype is used to store the document’s ID.
13. > **Binary data :−** This datatype is used to store binary data.
14. > **Code :−** This datatype is used to store JavaScript code into the document.
15. > **Regular expression :−** This datatype is used to store regular expression.





### shorts notes for MangoDb Data Types

> 1. **String :−** used to store the String data.
> 2. **Integer :−** used to store a numerical value
> 3. **Boolean :−** used to store a boolean (true/ false) value.
> 4. **Double :−** used to store floating point values.
> 5. **Min/ Max keys :−** used to compare a value against the lowest and highest BSON elements.
> 6. **Arrays :−** used to store arrays or list or multiple values into one key.
> 7. **Timestamp :−** ctimestamp. 
>       -  This can be handy for recording when a document has been modified or added.
> 8. **Object :−** used for embedded documents.
> 9. **Null :−** used to store a Null value.
> 10. **Symbol :−** used identically to a string; however, 
>       - it's generally reserved for languages that use a specific symbol type.
> 11. **Date :−** used to store the current date or time in UNIX time format.
> 12. **Object ID :−** used to store the document’s ID.
> 13. **Binary data :−** used to store binary data.
> 14. **Code :−** used to store JavaScript code into the document.
> 15. **Regular expression :−** used to store regular expression.



