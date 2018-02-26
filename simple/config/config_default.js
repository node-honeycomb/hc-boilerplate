'use strict';
const path = require('path');

module.exports = {
  /* honeybee config occupied */
  root: undefined,
  serverRoot: undefined,
  serverEnv: undefined,
  /* honeybee config end */
  debug: true,
  prefix: true,
  staticPath: undefined,
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
    public: {
      enable: true,
      router: '/static',
      extends: 'static',
      config: {
        root: path.join(__dirname, '../static')
      }
    }
  },
  extension: {
  }
};
