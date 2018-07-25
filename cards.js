var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/cardDB", {useNewUrlParser: true}, function (err, db) {
    if(err) throw err;
    console.log("Database loaded");
    var dbo = db.db("cardDB");
    dbo.createCollection("cards");
    dbo.collection("cards").find({name: document.getElementById("searchBox").value}).toArray(function(err, res) {
        if(err) throw err;
        console.log(res[0].name);
        
    });
    db.close();         
});
