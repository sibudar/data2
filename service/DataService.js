'use strict';
const getCSV = require('get-csv');



/**
 * Retrive data from external source
 * 
 *
 * returns List
 **/
exports.getData = function() {
  return new Promise(function(resolve, reject) {

    getCSV("https://thedigitalacademy.co.za/intents.csv")
    .then(rows => resolve(rows));

    
  });
}

