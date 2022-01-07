const fs = require('fs');

// const book = {
//     title: "ego is the enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

//challenge
//load and parse json data
//change name and age props
//stringify changed object and overwrite the original data
//test by viewing data in the json file

const user = JSON.parse(fs.readFileSync('1-json.json').toString());//reading file, changing from buffer to string, and parsing out of JSON to regular object
user.name = 'Gunther'
user.age = 102
const userJSON = JSON.stringify(user) //back to json object
fs.writeFileSync('1-json.json', userJSON) //overwriting object in file

console.log(user)