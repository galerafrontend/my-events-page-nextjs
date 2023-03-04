import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address!" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://frontendgalera:Q4esdRa8r-7zAZr@cluster0.vibpqwp.mongodb.net/newsletter?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });
    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
};

export default handler;
