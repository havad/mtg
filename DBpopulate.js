var fs = require('fs');

var contents = fs.readFileSync("C:\\Users\\chris\\Desktop\\allmtg-cards\\AllCards-x.json");

var jsonContent = JSON.parse(contents);


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//DONE  //TODO: be able to add a full record into the db "cardDB" in "card" collection
//TODO: check if a record exists so as to not add it twice(having real issues here, i think i'm missing something)

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("cardDB");
    dbo.createCollection("cards");

    var count = 0;

    for(item in jsonContent) {
        dbo.collection("cards").insertOne({
            name: jsonContent[item].name,
            layout: jsonContent[item].layout,
            manaCost: jsonContent[item].manaCost,
            cmc: jsonContent[item].cmc,
            colors: jsonContent[item].colors,
            type: jsonContent[item].type,
            types: jsonContent[item].types,
            subtypes: jsonContent[item].subtypes,
            text: jsonContent[item].text,
            power: jsonContent[item].power,
            toughness: jsonContent[item].toughness,
            imageName: jsonContent[item].imageName,
            rulings: jsonContent[item].rulings,
            printings: jsonContent[item].printings,
            legalities: jsonContent[item].legalities,
            colorIdentity: jsonContent[item].colorIdentity
                                });
        console.log(jsonContent[item].name + " added to DB.");
        count++;
    }

    console.log(count + " cards added. DB closing");
   db.close();
    
});