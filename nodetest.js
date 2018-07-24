var fs = require('fs');

var contents = fs.readFileSync("C:\\Users\\chris\\Desktop\\allmtg-cards\\AllCards-x.json");

var jsonContent = JSON.parse(contents);

console.log(jsonContent["Adorable Kitten"]);
/*
var count = 0;

for (item in jsonContent) {
    console.log(jsonContent[item].name);
    count++;
}

console.log("The number of cards is " + count);
*/