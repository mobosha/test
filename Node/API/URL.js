const url = require('url');
const myURLs = [
  new url('https://www.example.com'),
  new url('https://test.example.org')
];
console.log(JSON.stringify(myURLs));
  // Prints ["https://www.example.com/","https://test.example.org/"]