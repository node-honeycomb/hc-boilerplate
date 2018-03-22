'use strict';

// 引入组件
const demoHelloworld = require('./scene/demoHelloworld/page.jsx');
const demoOrdinaryTable = require('./scene/demoOrdinaryTable/page.jsx');
const demoFilterTable = require('./scene/demoFilterTable/page.jsx');
const demoModal = require('./scene/demoModal/page.jsx');
const demoCard = require('./scene/demoCard/page.jsx');

const basename = window.CONFIG && window.CONFIG.prefix || '/example';
if (!window.CONFIG) {
  window.CONFIG = {
    prefix: basename
  };
} else {
  window.CONFIG.prefix = basename;
}

module.exports = [
  {
    path: basename,
    component: demoHelloworld,
    childRoutes: [
      {
        path: 'card', // 访问/card
        component: demoCard
      }, {
        path: 'table', // 访问/table
        childRoutes: [
          {
            path: 'ordinary',
            component: demoOrdinaryTable
          }, {
            path: 'filter',
            component: demoFilterTable
          }
        ]
      }, {
        path: 'modal', // 访问/modal
        component: demoModal
      }
    ]
  }
];
