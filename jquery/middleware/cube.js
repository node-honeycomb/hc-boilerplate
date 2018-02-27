const Cube = require('node-cube');
const path = require('path');
const _ = require('lodash');

const defaultOptions = {
  root: path.join(__dirname, '../assets')
};

module.exports = (app, options) => {
  options = _.merge({}, defaultOptions, options);
  return Cube.middleware(options);
};
