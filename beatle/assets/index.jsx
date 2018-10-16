'use strict';

import Beatle from 'beatle';
import './index.less';

const app = new Beatle({
  name: 'app'
});

const ListModel = require('./model/list');
const UserModel = require('./model/user');
app.model(ListModel);
app.model(UserModel);

const routes = require('./routes.jsx');
app.route(routes);

app.ajax.beforeRequest(function (urlCfg) {
  if (urlCfg.mock) {
    return Promise.resolve(urlCfg.mock);
  }
});
app.run(document.getElementById('main'));

module.exports = app;
