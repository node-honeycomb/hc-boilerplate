import Beatle from 'beatle';

export default Beatle.createModel({
  store: {
    list: {
      data: [],
      metric: {
        loading: true,
        total: 0
      }
    },
    item: {}
  },

  actions: {
    getList: {
      callback: (nextState, payload) => {
        nextState.list = {
          data: payload.data.data,
          metric: {
            total: payload.data.total,
            loading: false
          }
        };
      }
    },
    getItem: {
      callback: (nextState, payload) => {
        nextState.item = payload.data;
      }
    }
  }
}, require('../resources/list'));
