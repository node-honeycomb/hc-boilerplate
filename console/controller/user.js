/**
 * @api /api/getUser
 */
exports.getUser = function (req, callback) {
  const data = {
    id: 1,
    gmtCreate: '2017-11-11 11:11:11',
    gmtModified: '2017-11-11 11:11:11',
    mail: 'beatleGroup@aliyun.com',
    name: 'beatle-group',
    avatar: 'https://img.alicdn.com/tfs/TB131CMk5qAXuNjy1XdXXaYcVXa-32-32.svg'
  };

  callback(null, data, 'json');
};
