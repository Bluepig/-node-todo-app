const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('connected to mongodb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id : new ObjectID('5b22393ef20c388416809150')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });


  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);

  }, (err) => {
    console.log('Unable to fetch todos');
  });



  client.close();
})
