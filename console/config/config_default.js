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
      router: '/assets',
      extends: 'static',
      config: {
        root: path.join(__dirname, '../assets/static')
      }
    },
    webpack: {
      enable: true,
      module: 'honeypack',
      router: '/assets'
    },
    mocker: {
      enable: false,
      module: 'hc-mocker',
      config: {
        file: './assets/metadata/apiMock.js',
        routes: ['/api/*']
      }
    },
    spa: {
      enable: true,
      module: '../middleware/spa',
      config: {
        ignore: [
          '/api'
        ]
      }
    }
  },
  extension: {
    redirect: {
      config: {
        allowDomains: []
      }
    },
    appClient: {
      enable: false
    }
  }
};
