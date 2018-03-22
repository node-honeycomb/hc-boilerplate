'use strict';

let _ = require('lodash');
import Beatle from 'beatle';

module.exports = Beatle.createModel({
  displayName: 'list',
  store: {
    data: {}
  },
  actions: {
    getUser: {
      async: true,
      reducer: {
        success: (store, action) => {
          store.data = _.get(action, 'data');
        }
      }
    }
  },
  subscriptions: {
  }
}, require('../resource/user'));
