'use strict';

var utils = require('../utils/writer.js');
var Data = require('../service/DataService');

module.exports.getData = function getData (req, res, next) {
  Data.getData()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
