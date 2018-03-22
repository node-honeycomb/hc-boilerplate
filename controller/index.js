'use strict';

var config = require('../config');

/**
 * @api /api/hello_text
 */
exports.helloText = function (req, callback) {
  let data = 'hello';
  callback(null, data, 'text');
};

/**
 * @api /welcome
 */
exports.welcomeTpl = function (req, callback) {
  callback(null, {
    tpl: 'welcome.html',
    data: {
      prefix: config.prefix === '/' ? '' : config.prefix
    }
  }, 'html');
};

/**
 * @api /*
 * @nowrap
 */
exports.demoPage = demoPage;

function demoPage(req, res) {
  res.render('index.html', {
    isDebug: config.debug,
    csrfToken: req.csrfToken(),
    prefix: config.staticPath || (config.prefix === '/' ? '' : config.prefix),
    env: config.env,
    privateCloud: !!config.privateCloud
  });
};

/**
 * 如需要使用原始的API, 请加上  nowrap 标记
 * @api /api/hello_origin
 * @nowrap
 */
exports.helloOrigin = function (req, res) {
  res.end('hello');
};


/**
 * 支持 generatorFunction, 使用方式和上面一样，如果需要nowrap, 同样加个注解
 * @api /api/hello_gen
 */
exports.helloGen = function* (req) {
  return 'hello';
};

/**
 * 支持 asyncFunction, 使用方式和上面一样，如果需要nowrap, 同样加个注解
 * @api /api/hello_async
 */
exports.helloGen = async function (req) {
  return 'hello';
};

