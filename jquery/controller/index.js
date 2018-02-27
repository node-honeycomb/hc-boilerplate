'use strict';
const pkg = require('../package');
const config = require('../config');
/**
 * @api /
 */
exports.index = function (req, callback) {
  callback(null, {
    tpl: 'welcome.html',
    data: {
      debug: config.debug,
      version: pkg.version + '_' + (pkg.build || 1),
      prefix: config.prefix === '/' ? '' : config.prefix
    }
  }, 'html');
};
