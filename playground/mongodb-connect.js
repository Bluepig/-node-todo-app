// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('connected to mongodb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) =>{
  //   if(err){
  //     return console.log('unable to insert todo');
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: 'Gao Ya',
    age: 22,
    location: 'Suzhou'
  }, (err, res) =>{
    if(err){
      return console.log('unable to insert todo');
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  })



  client.close();
})
