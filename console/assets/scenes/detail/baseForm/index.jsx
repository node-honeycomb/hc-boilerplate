import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Beatle from 'beatle';

import {CustomForm} from 'hc-components';

class BaseFormScene extends Component {
  static routeOptions = {
    title: '基础表单',
    layout: ['consoleLayout', 'contentLayout'],
    // layoutOption: {
    //   components: {
    //     BreadCrumb: {
    //       combox: (<h1>Hello World</h1>)
    //     }
    //   }
    // }
  }

  static propTypes = {
    user: PropTypes.object
  }

  componentDidMount() {
    this
      .props
      .user
      .getProfile();
  }

  render() {
    const options = [{
      name: 'nick',
      type: 'string',
      label: '昵称',
      placeholder: '请输入昵称',
      rules: {
        required: true,
        message: '昵称不能为空'
      }
    }, {
      name: 'email',
      type: 'string',
      label: '邮箱',
      placeholder: '请输入有效邮箱地址',
      rules: [{
        required: true,
        message: '邮箱地址不能为空'
      }, {
        type: 'email',
        message: '邮箱地址非法'
      }]
    }];
    return (
      <div className="j-scene j-scene-baseForm">
        <CustomForm options={options} dataSource={this.props.user.profile} />
      </div>
    );
  }
}

export default Beatle.connect(['user'], BaseFormScene);
