import Beatle from 'beatle';

export default Beatle.createModel({
  store: {
    profile: {}
  },

  actions: {
    getProfile: {
      callback: (nextState, payload) => {
        nextState.profile = payload.data;
      }
    }
  }
}, require('../resources/user'));
