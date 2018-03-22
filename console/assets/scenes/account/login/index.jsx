import React from 'react';

import Tabs from 'antd/lib/tabs';
import Icon from 'antd/lib/icon';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import Alert from 'antd/lib/alert';
import Beatle from 'beatle';

import {CustomForm} from 'hc-components';
import './index.less';

export default class LoginScene extends React.Component {
  static routeOptions = {
    title: '登陆',
    layout: 'landingLayout'
  }

  tabKeys = ['account', 'mobile'];

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      errorMessage: '',
      activeKey: 'account'
    };
  }

  handleSbumit() {}

  handleCaptcha() {
    let count = 59;
    this.setState({count});
    this.$interval_ = setInterval(() => {
      count -= 1;
      this.setState({count});
      if (count === 0) {
        clearInterval(this.$interval_);
      }
    }, 1000);
  }

  render() {
    return (
      <div className="j-scene j-scene-login">
        <Tabs
          animated={false}
          activeKey={this.state.activeKey}
          onChange={key => this.setState({activeKey: key, errorMessage: ''})}>
          <Tabs.TabPane tab="账户密码登录" key={this.tabKeys[0]}>
            {(this.state.errorMessage && this.state.activeKey === this.tabKeys[0]) ?
              (<Alert
                style={{
                  marginBottom: 24
                }}
                message={this.state.errorMessage}
                type="error"
                showIcon
              />) : null}
            <CustomForm
              onSubmit={this
                .handleSbumit
                .bind(this)}
              formLayout={{
                labelCol: {
                  span: 0
                },
                wrapperCol: {
                  span: 24
                }
              }}
              options={[{
                type: 'string',
                name: 'username',
                title: '账号',
                placeholder: 'admin',
                rules: [
                  {
                    required: this.state.activeKey === 'account',
                    message: '请输入账户名！'
                  }
                ],
                getProps: () => {
                  return {size: 'large', prefix: (<Icon type="user" className="prefixIcon" />)};
                }
              }, {
                type: 'string',
                name: 'password',
                title: '密码',
                placeholder: 'admin',
                rules: [
                  {
                    required: this.state.activeKey === 'account',
                    message: '请输入密码！'
                  }
                ],
                getProps: () => {
                  return {size: 'large', prefix: (<Icon type="lock" className="prefixIcon" />)};
                }
              }, {
                type: 'boolean',
                name: 'remember',
                default: true,
                render: (key, formItemWrapper, inputPops) => {
                  return formItemWrapper((
                    <Checkbox {...inputPops}>自动登录<a className="elem-forgot" href="">忘记密码</a>
                    </Checkbox>
                  ), {valuePropName: 'checked'});
                }
              }
              ]}
              buttons={(
                <Button htmlType="submit" size="large" type="primary">登陆</Button>
              )}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="手机号登录" key={this.tabKeys[1]}>
            {(this.state.errorMessage && this.state.activeKey === this.tabKeys[1]) ?
              (<Alert
                style={{
                  marginBottom: 24
                }}
                message={this.state.errorMessage}
                type="error"
                showIcon
              />) : null}
            <CustomForm
              onSubmit={this
                .handleSbumit
                .bind(this)}
              formLayout={{
                labelCol: {
                  span: 0
                },
                wrapperCol: {
                  span: 24
                }
              }}
              options={[
                {
                  type: 'string',
                  name: 'phone',
                  title: '手机号',
                  rules: [
                    {
                      required: this.state.activeKey === 'mobile',
                      message: '请输入手机号！'
                    }, {
                      pattern: /^1\d{10}$/,
                      message: '手机号格式错误！'
                    }
                  ],
                  placeholder: '手机号',
                  getProps: () => {
                    return {size: 'large', prefix: (<Icon type="mobile" className="prefixIcon" />)};
                  }
                }, {
                  type: 'string',
                  name: 'captcha',
                  title: '验证码',
                  placeholder: '验证码',
                  className: 'elem-captcha',
                  getProps: () => {
                    return {size: 'large', prefix: (<Icon type="mail" className="prefixIcon" />),
                      suffix: (
                        <Button
                          disabled={this.state.count > 0}
                          className="elem-captcha-btn"
                          size="large"
                          onClick={this
                            .handleCaptcha
                            .bind(this)}>
                          {this.state.count ? `${this.state.count} s` : '获取验证码'}
                        </Button>)
                    };
                  }
                }, {
                  type: 'boolean',
                  name: 'remember',
                  render: (key, formItemWrapper, inputPops) => {
                    return formItemWrapper((
                      <Checkbox {...inputPops}>自动登录<a className="elem-forgot" href="">忘记密码</a>
                      </Checkbox>
                    ), {valuePropName: 'checked'});
                  }
                }
              ]}
              buttons={(
                <Button htmlType="submit" size="large" type="primary">登陆</Button>
              )}
            />
          </Tabs.TabPane>
        </Tabs>
        <div className="elem-other">
          其他登录方式
          <span className="iconAlipay" />
          <span className="iconTaobao" />
          <span className="iconWeibo" />
          <Beatle.Link className="elem-register" to="account/signup">注册账户</Beatle.Link>
        </div>
      </div>
    );
  }
}
