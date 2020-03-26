import { MongoClient } from "mongodb";

const dbName = "jwt-authentication-example";

function createClient() {
  const client = new MongoClient(
    `${process.env.MONGODB_PATH}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  client.usersCollection = function() {
    return this.db(dbName).collection("users");
  };

  return client;
}

export { createClient };
