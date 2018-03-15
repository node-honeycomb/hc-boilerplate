import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Beatle from 'beatle';

import {Result} from 'hc-components';
import {browserHistory} from 'react-router';

export default class ResultScene extends Component {
  static routeOptions = {
    name: 'successResult',
    title: '成功结果',
    layout: ['consoleLayout', 'contentLayout'],
    query: {
      type: 'success'
    },

    path: 'feedback/:name',
    aliasRoutes: [{
      name: 'errorResult',
      title: '错误结果',
      query: {
        type: 'error'
      }
    }]
  }

  static propTypes = {
    route: PropTypes.object
  }

  render() {
    const links = [
      {
        type: 'primary',
        size: 'default',
        name: '返回首页',
        action: () => {
          browserHistory.replace(Beatle.route('/').resolvePath);
        }
      }
    ];
    return (<Result
      type={this.props.route.query.type}
      title="结果反馈"
      description="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 通过extra区域可以展示简单的补充说明，如果有类似展示 “单据”的需求"
      extra=""
      links={links}
      style={{
        marginTop: 56
      }} />);
  }
}
