'use strict';

module.exports = {
  debug: false,
  logs: {
    sys: {
      level: 'WARN',
      file: '${serverRoot}/logs/${appName}/sys.%year%-%month%-%day%.log',
      rotation: 30
    }
  },
  middleware: {
    cube: {
      enable: false
    },
    static: {
      enable: true
    }
  }
};
