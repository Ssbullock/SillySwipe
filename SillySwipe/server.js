const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://simon:simon@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const db = client.db("test");
});

const db = client.db("test");
const profiles = db.collection("profiles");
