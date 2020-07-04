const {
    MongoClient
} = require('mongodb');
const assert = require('assert');

const url = "mongodb+srv://Mohammad:Moha12!@34@cluster0.q25a9.mongodb.net/world?retryWrites=true&w=majority";
connect();

async function connect() {
    const client = new MongoClient(url, {
        useUnifiedTopology: true
    });
    try {
        await client.connect();
        const db = client.db('world');
        console.log(`connected to database ${db.databaseName}`);
        const collectionCity = db.collection('city');

        // to show collection
        /*
          const searchCursor = await collectionCity.find({
              "Name": "cacao"
          });
          const searchCursor = await collectionCity.find({
              "CountryCode": "CAC"
          });
          const result = await searchCursor.toArray();
          console.table(result);
          */

        // insert one document
        /*
        const insertCursor = await collectionCity.insertOne({
            ID: 1001,
            Name: "cacao",
            CountryCode: 1001,
            District: "Highway 37",
            Population: 1001
        });
        console.log(insertCursor.insertedCount);
        */

        // update population
        /*
          const updateCursor = await collectionCity.updateOne({
              "Name": "cacao"
          }, {
              "$set": {
                  "Population": 1010,  "CountryCode": "CAC"
              }
          });
          console.log(updateCursor.modifiedCount);
          */

        // delete 
        /*
        const deleteCursor = await collectionCity.deleteOne({
            "Name": "cacao"
        });
        console.log(deleteCursor.deletedCount);
          */

    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
}