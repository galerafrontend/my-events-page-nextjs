import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mdb_username}:${process.env.mdb_password}@${process.env.mdb_clustername}.vibpqwp.mongodb.net/${process.env.mdb_database}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(connectionString);

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (
  client,
  collection,
  filter = {},
  sort
) => {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
};
