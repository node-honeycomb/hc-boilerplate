'use strict';
const path = require('path');

module.exports = {
  /* honeybee config end */
  debug: true,
  prefix: true,
  logs: {
    sys: {
      level: 'INFO'
    }
  },
  middleware: {
    cookieSession: {
      config: {
        secret: 'defalutSecret!PLEASE!REPLACE!'
      }
    },
    cube: {
      enable: true,
      module: '../middleware/cube.js',
      router: '/assets',
      config: {
        root: path.join(__dirname, '../assets')
      }
    },
    static: {
      enable: false,
      router: '/assets',
      config: {
        root: path.join(__dirname, '../assets')
      }
    }
  },
  extension: {
  }
};
