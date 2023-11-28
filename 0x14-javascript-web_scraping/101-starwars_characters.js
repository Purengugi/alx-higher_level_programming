#!/usr/bin/node
//  script that prints all characters of a Star Wars

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request(url, function (error, response, body) {
  if (!error) {
    const characters = JSON.parse(body).characters;
    printChars(characters, 0);
  }
});

function printChars (characters, counter) {
  request(characters[counter], function (error, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (counter + 1 < characters.length) {
        printChars(characters, counter + 1);
      }
    }
  });
}
