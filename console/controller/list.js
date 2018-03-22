/**
 * @api /api/getList
 */
exports.getList = function (req, callback) {
  let data = {
    data: [
      {
        id: 1,
        gmtCreate: '2017-11-11 11:11:11',
        gmtModified: '2017-11-11 11:11:11',
        name: '测试1',
        description: '描述信息',
        accountId: 1,
        status: 1
      }, {
        id: 2,
        gmtCreate: '2017-22-22 22:22:22',
        gmtModified: '2017-22-22 22:22:22',
        name: '测试2',
        description: '描述信息',
        accountId: 1,
        status: 1
      }, {
        id: 3,
        gmtCreate: '2017-10-10 10:10:10',
        gmtModified: '2017-10-10 10:10:10',
        name: '测试3',
        description: '描述信息',
        accountId: 1,
        status: 1
      }
    ],
    total: 3
  };
  callback(null, data, 'json');
};

/**
 * @api /api/getItem
 */
exports.getItem = function (req, callback) {
  const data = {
    id: 1,
    gmtCreate: '2017-11-11 11:11:11',
    gmtModified: '2017-11-11 11:11:11',
    mail: 'beatleGroup@aliyun.com',
    name: 'beatle-group'
  };
  callback(null, data, 'json');
};
