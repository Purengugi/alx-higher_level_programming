#!/usr/bin/node
//  a script that prints all characters of a Star Wars movie

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request(url, (error, response, body) => {
  if (error) console.error(error);
  if (response && response.statusCode === 200) {
    const characters = JSON.parse(body).characters;
    characters.forEach((character) => {
      request(character, (err, resp, bd) => {
        if (err) console.error(err);
        if (resp && resp.statusCode === 200) {
          console.log(JSON.parse(bd).name);
        }
      });
    });
  }
});
