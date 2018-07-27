var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cardDB";
MongoClient.connect(url, {useNewUrlParser:true}, function(err, db) {
    if(err) throw err;
    db.collection("cards").find({name: "Adorable Kitten"}).toArray(function(err, res) {
        if(err) throw err;
        console.log(res[0].layout);
    })
    db.close();
})