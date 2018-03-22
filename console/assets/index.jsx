import Beatle from 'beatle';
import {LoadingBar} from 'hc-components';
import setGlobalConfig from './app.config';

import './index.less';

const app = new Beatle({
  name: 'main',
  root: document.getElementById('main'),
  base: window.CONFIG && window.CONFIG.prefix,
  env: window.location.search.indexOf('debug=true') > -1 ? {debug: true} : null,
  autoLoadModel: true,
  autoLoadRoute: true,
  ajax: {
    origin: window.CONFIG && window.CONFIG.prefix
  }
});

setGlobalConfig(app);

app.use((action, next) => {
  if (action.type && !action.suppressGlobalProgress) {
    if (action.type.match(/\/start$/)) {
      LoadingBar.showLoading();
    } else if (action.type.match(/\/success$/) || action.type.match(/\/error$/)) {
      LoadingBar.hideLoading();
    }
  }
  next(action);
});

app.run();
