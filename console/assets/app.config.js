import Notification from 'antd/lib/notification';
import ExceptionScene from './scenes/feedback/exception';
export default function setGlobalConfig(app) {
  /**
   * + 当开发环境启动时，并且访问地址带有debug=true，会走数据模拟逻辑。
   * 1. apiMock是一份描述了接口和模拟数据逻辑的JSON文件
   * 2. hc-mocker创建一个数据模拟器实例，并且设置发接口请求时，走beatle的ajax实例来调用，这样可以通过`beforeRequest`等进行拦截
   * 3. 在beforeRequest发请求之前获取到接口对应的模拟数据的配置信息
   * 4. 在afterResponse接口返回结果后，
   */
  if (process.env.NODE_ENV === 'development' && window.location.search.indexOf('debug=true') > -1) {
    const apiMock = require('./metadata/apiMock');
    const Mocky = require('hc-mocker/mocky');
    Mocky.fetch = (url, callback) => {
      return app.ajax.get(url, null, callback);
    };
    window.mocker = new Mocky();

    // #! 发请求之前，解析接口路径pathname，通过`${Method} ${pathname}`拼接成key（标识接口的唯一性），因为在apiMock中，key做对应的值就是模拟数据的配置信息。
    app
      .ajax
      .set('beforeRequest', (ajaxOptions) => {
        if (!ajaxOptions.pathname) {
          ajaxOptions.pathname = ajaxOptions
            .url
            .split('?')[0]
            .split(window.CONFIG && window.CONFIG.prefix || window.location.origin)[1];
          ajaxOptions.mock = apiMock[ajaxOptions.method + ':' + ajaxOptions.pathname];
        }
        // #! 存在模拟数据的配置，判断有url属性时说明要改写请求的url，否则当做是结果为空来处理。
        if (ajaxOptions.mock) {
          if (ajaxOptions.mock.url) {
            ajaxOptions.url = window.CONFIG && window.CONFIG.prefix + ajaxOptions.mock.url;
          } else {
            return Promise.resolve(null);
          }
        }
      });
  }

  // #! 接口返回结果判断是否需要做模拟数据，否则做接口错误处理
  app
    .ajax
    .set('afterResponse', (res, ajaxOptions) => {
      if (window.mocker && ajaxOptions.mock) {
        res = window.mocker.mock(res, ajaxOptions.mock);
      }
      if (res instanceof Promise) {
        return res.then(res => res.data);
      } else if (res.code && res.code !== 'SUCCESS') {
        let message = res.message || '接口错误, 无错误消息';
        if (Object(message) === message) {
          message = JSON.stringify(message);
        }
        Notification.error({
          message: res.code || 'NO_ERROR_CODE',
          description: message,
          duration: 6
        });
        return false;
      } else {
        return res.data;
      }
    });

  const exceptionRoutes = [{
    name: 'noAuth',
    component: ExceptionScene,
    hide: true,
    exception: 403
  }, {
    name: 'error',
    component: ExceptionScene,
    hide: true,
    exception: 500
  }, {
    path: '*',
    resolvePath: '*',
    component: ExceptionScene,
    hide: true,
    exception: 404
  }];
  // #! 设置全局路由, 主要是异常跳转的路由
  app.setRoutes(exceptionRoutes);
}

