import React from 'react';
import PropTypes from 'prop-types';
import Beatle from 'beatle';
import {browserHistory} from 'react-router';
import {Exception, getComponent} from 'hc-components';

const exceptions = {
  403: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: '抱歉，你无权访问该页面'
  },
  404: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: '抱歉，你访问的页面不存在'
  },
  500: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: '抱歉，服务器出错了'
  }
};

export default class ExceptionScene extends React.PureComponent {
  static routeOptions = {
    name: 'NotFoundException',
    title: '404异常',
    layout: [
      'consoleLayout', 'landingLayout'
    ],
    layoutOption: {
      LandingLayout: {
        components: {
          Brand: getComponent.emptyElement
        },
        style: {}
      }
    },
    query: {
      code: 404
    },

    path: 'feedback/:name',
    /**
     * ### 衍生路由
     * 1. 集成当前路由的配置
     * 2. 毎个衍生的路由，其配置和当前路由做merge
     * 3. 衍生路由的路径必须要重新生成，有2个思路，1是从当前路由的path中替换:name为衍生路由的name从而得到新的path，2是衍生路由自己定义path属性。这里选择了第一种方式
     */
    aliasRoutes: [{
      name: 'NoAuthException',
      title: '403异常',
      query: {
        code: 403
      }
    }, {
      name: 'ErrorException',
      title: '500异常',
      query: {
        code: 500
      }
    }]
  }

  static propTypes = {
    route: PropTypes.object
  }

  render() {
    const query = this.props.route.query;
    const links = [
      {
        type: 'primary',
        size: 'large',
        name: '返回首页',
        action: () => {
          browserHistory.replace(Beatle.route('/').resolvePath);
        }
      }
    ];
    return (<Exception
      data={exceptions[query.code]}
      style={{
        minHeight: 500,
        height: '80%'
      }}
      links={links}
    />);
  }
}
