'use strict';

module.exports = {
  getUser: {
    url: '/demo/api/getUser',
    method: 'GET',
    // mock数据联调时删除
    mock: {
      isAdmin: true,
      nickname: '无惟',
      tenantCode: 'dtboost'
    }
  }
}
