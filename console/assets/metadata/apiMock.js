// responseType = object|array|list|boolean|integer|string|null|undefined|exception

module.exports = {
  'GET /api/getProfile': {
    url: '/assets/metadata/schemas/account.json',
    responseType: 'object'
  },
  'GET /api/getItem': {
    url: '/assets/metadata/schemas/account.json',
    responseType: 'object'
  },
  'GET /api/getList': {
    url: '/assets/metadata/schemas/todo_list.json',
    responseType: 'list'
  }
};
