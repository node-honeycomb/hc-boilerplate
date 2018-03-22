'use strict';

let _ = require('lodash');
import Beatle from 'beatle';

module.exports = Beatle.createModel({
  // store结构可以随便自己定义
  displayName: 'list',
  store: {
    data: []
  },
  actions: {
    getList: {
      reducer: {
        success: (store, action) => {
          store.data = _.get(action, 'data');
        }
      }
    }
  },
  subscriptions: {
  }
}, require('../resource/list'));
