'use strict';
const pathIgnore = require('path-ignore');
const config = require('../config');

module.exports = function (app, options) {
  const tester = pathIgnore(options.ignore);

  return (req, res, next) => {
    if (tester(req.path)) {
      return next();
    }

    res.render('index.html', {
      isDebug: config.debug,
      csrfToken: req.csrfToken(),
      prefix: config.staticPath || (config.prefix === '/' ? '' : config.prefix),
      env: config.env,
      privateCloud: !!config.privateCloud
    });
  };
};
