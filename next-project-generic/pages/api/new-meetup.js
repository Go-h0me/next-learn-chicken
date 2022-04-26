import { MongoClient } from "mongodb";

//api/new-meetup
//POST /api.new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://Gohome:Upd2RvCiAsSLQctk@cluster0.n5txx.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({ title, image, address, description });

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
