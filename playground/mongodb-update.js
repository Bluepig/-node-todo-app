const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('connected to mongodb server');

  const db = client.db('TodoApp');

  //delete many
  db.collection('Todos').findOneAndUpdate









  client.close();
})
