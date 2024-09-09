const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://anandsharmika2003:NQKVEB6ajqr0XBV3@cluster0.3ltrf.mongodb.net/';
const client = new MongoClient(url);
// Database Name
const dbName = 'office';

async function insertData(){
    let empData ={
        "name":"sharmi",
        "mobile":"9344798588",
        "address":"ambur",
    }
    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection('employee');
    await collection.insertOne(empData);
    console.log('Record inserted');
}

insertData();