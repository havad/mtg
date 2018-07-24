var fs = require('fs');

var contents = fs.readFileSync("C:\\Users\\chris\\Desktop\\allmtg-cards\\test-cards.json");

var jsonContent = JSON.parse(contents);


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("cardDB");
    var card = {name: jsonContent["Adorable Kitten"].name, layout: jsonContent["Adorable Kitten"].layout};
    dbo.collection("cards").insertOne(card, function(err, res) {
        if (err) throw err;
        console.log("object inserted into db");
    });
    dbo.collection("cards").findOne({}, function(err, res) {
        if(err) throw err;
        console.log(res.name + " : " + res.layout);
    })
    db.close();
});

/*var fs = require('fs');

var contents = fs.readFileSync("C:\\Users\\chris\\Desktop\\allmtg-cards\\test-cards.json");

var jsonContent = JSON.parse(contents);

for(item in jsonContent) {
    console.log(jsonContent[item].layout);
    console.log(jsonContent[item].name);
    console.log(jsonContent[item].manaCost);
    console.log(jsonContent[item].cmc);
    console.log(jsonContent[item].colors);
    console.log(jsonContent[item].type);
    console.log(jsonContent[item].types);
    console.log(jsonContent[item].subtypes);
    console.log(jsonContent[item].text);
    console.log(jsonContent[item].power);
    console.log(jsonContent[item].toughness);
    console.log(jsonContent[item].imageName);
    console.log(jsonContent[item].rulings);
    console.log(jsonContent[item].printings);
    console.log(jsonContent[item].legalities);
    console.log(jsonContent[item].colorIdentity);
    console.log("");
}

*/
/*
var count = 0;

for (item in jsonContent) {
    console.log(jsonContent[item].name);
    count++;
}

console.log("The number of cards is " + count);
*/