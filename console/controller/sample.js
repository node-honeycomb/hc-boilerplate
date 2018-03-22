'use strict';

/**
 * @api /welcome
 */
exports.welcomeTpl = function (req, callback) {
  var config = require('../config');
  callback(null, {
    tpl: 'welcome.html',
    data: {
      prefix: config.prefix === '/' ? '' : config.prefix
    }
  }, 'html');
};

/**
 * @api /api/hello_text
 */
exports.helloText = function (req, callback) {
  let data = 'hello';
  callback(null, data, 'text');
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
exports.helloGen = function* (req, callback) {
  yield callback(null, 'hello');
};
