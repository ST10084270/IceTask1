import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://st10084270:7wvDMTyNA1SLFy3u@cluster0.moup3j1.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log('does this work?')
} catch(e) {
  console.error(e);
}

let db = conn.db("records");

export default db;