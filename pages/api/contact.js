import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !message ||
      message.trim() == ""
    ) {
      res.status(442).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ec0pi.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    console.log(connectionString);
    console.log("phase", process.env.phase);
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Cloud not connect DB" });
      return;
    }
    const db = client.db();

    try {
      const result = await db.collection("meassage").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing meassage failed" });
      return;
    }

    client.close();
    res.status(201).json({ message: "Successful", message: newMessage });
    return;
  }
}
