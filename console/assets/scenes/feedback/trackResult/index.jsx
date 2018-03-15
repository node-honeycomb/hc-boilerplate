import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';
import {Result} from 'hc-components';

export default class TrackResultScene extends Component {
  static routeOptions = {
    title: '处理结果',
    layout: ['consoleLayout', 'contentLayout']
  }

  static propTypes = {
    route: PropTypes.object
  }

  render() {
    const links = [
      {
        type: 'primary',
        size: 'default',
        name: '返回修改'
      }
    ];
    return (<Result
      type="error"
      title="提交失败"
      description="请核对并修改以下信息后，再重新提交。"
      extra={(<div>
        <h3>您提交的内容有如下错误：</h3>
        <br />
        <p>
          <Icon style={{color: '#f5222d', marginRight: 8}} type="close-circle-o" />您的账户已被冻结
          <a style={{marginLeft: 16}}>立即解冻 <Icon type="right" /></a>
        </p>
        <br />
        <p>
          <Icon style={{color: '#f5222d', marginRight: 8}} type="close-circle-o" />您的账户还不具备申请资格
          <a style={{marginLeft: 16}}>立即升级 <Icon type="right" /></a>
        </p>
      </div>)}
      links={links}
      style={{marginTop: 56}}
    />);
  }
}
