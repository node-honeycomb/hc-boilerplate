import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Alert from 'antd/lib/alert';
import Tabs from 'antd/lib/tabs';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Popover from 'antd/lib/popover';
import Progress from 'antd/lib/progress';
import Beatle from 'beatle';

import {CustomForm} from 'hc-components';
import './index.less';

export default class LoginScene extends Component {
  static routeOptions = {
    title: '注册',
    layout: 'landingLayout'
  }

  static propTypes = {
    form: PropTypes.object
  }

  statusMap = {
    ok: (
      <p className="status-success">强度：强</p>
    ),
    pass: (
      <p className="status-warning">强度：中</p>
    ),
    pool: (
      <p className="status-error">强度：太短</p>
    )
  };

  progressMap = {
    ok: 'success',
    pass: 'normal',
    pool: 'exception'
  };

  tabKeys = ['account'];

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      errorMessage: '',
      activeKey: 'account',
      confirmDirty: false,
      visible: false,
      help: ''
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

  renderStatusProgress(form) {
    let status = 'pool';
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      status = 'ok';
    }
    if (value && value.length > 5) {
      status = 'pass';
    }
    return (
      <div style={{
        padding: '4px 0'
      }}>
        {this.statusMap[status]}
        {value && value.length ?
          (
            <div className={'progress-' + status}>
              <Progress
                status={this.progressMap[status]}
                className="progress"
                strokeWidth={6}
                percent={(value.length * 10 > 100 ? 100 : value.length * 10)}
                showInfo={false}
              />
            </div>
          ) : null}
        <p style={{
          marginTop: 10
        }}>请至少输入 6 个字符。请不要使用容易被猜到的密码。</p>
      </div>
    );
  }

  checkPassword(form, rule, value, callback) {
    if (!value) {
      this.setState({
        help: '请输入密码！',
        visible: !!value
      });
      callback('error');
    } else {
      this.setState({help: ''});
      if (!this.state.visible) {
        this.setState({
          visible: !!value
        });
      }
      if (value.length < 6) {
        callback('error');
      } else {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], {force: true});
        }
        callback();
      }
    }
  }

  handleConfirmBlur = (e) => {
    const {value} = e.target;
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value
    });
  }

  checkConfirm = (form, rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不匹配!');
    } else {
      callback();
    }
  }

  render() {
    return (
      <div className="j-scene j-scene-signup">
        <Tabs
          animated={false}
          activeKey={this.state.activeKey}
          onChange={key => this.setState({activeKey: key})}>
          <Tabs.TabPane tab="账号注册" key={this.tabKeys[0]}>
            {this.state.errorMessage && this.state.activeKey === this.tabKeys[0] ?
              (<Alert
                style={{
                  marginBottom: 24
                }}
                message={this.state.errorMessage}
                type="error"
                showIcon
              />) : null}
            <CustomForm
              onSubmit={this.handleSbumit.bind(this)}
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
                  name: 'mail',
                  title: '账号',
                  placeholder: '邮箱',
                  rules: [
                    {
                      required: true,
                      message: '请输入邮箱地址！'
                    }, {
                      type: 'email',
                      message: '邮箱地址格式错误！'
                    }
                  ],
                  getProps: () => {
                    return {size: 'large'};
                  }
                }, {
                  type: 'string',
                  name: 'password',
                  title: '密码',
                  placeholder: '至少6位密码，区分大小写',
                  help: this.state.help,
                  render: (key, formItemWrapper, inputPops, form) => {
                    return (
                      <Popover
                        key={key}
                        content={this.renderStatusProgress(form)}
                        overlayStyle={{
                          width: 240
                        }}
                        placement="right"
                        visible={this.state.visible}>
                        {formItemWrapper((<Input {...inputPops} size="large" type="password" />), {
                          rules: [
                            {
                              required: true,
                              message: '请输入密码！'
                            }, {
                              validator: this
                                .checkPassword
                                .bind(this, form)
                            }
                          ]
                        })}
                      </Popover>
                    );
                  }
                }, {
                  type: 'string',
                  name: 'confirm',
                  title: '确认密码',
                  placeholder: '确认密码',
                  render: (key, formItemWrapper, inputPops, form) => {
                    return formItemWrapper((<Input {...inputPops} size="large" type="password" />), {
                      rules: [
                        {
                          required: true,
                          message: '请确认密码！'
                        }, {
                          validator: this
                            .checkConfirm
                            .bind(this, form)
                        }
                      ]
                    });
                  }
                }, {
                  type: 'string',
                  name: 'captcha',
                  title: '验证码',
                  placeholder: '验证码',
                  className: 'elem-captcha',
                  getProps: () => {
                    return {size: 'large', suffix: (
                      <Button
                        disabled={this.state.count > 0}
                        className="elem-captcha-btn"
                        size="large"
                        onClick={this
                          .handleCaptcha
                          .bind(this)}>
                        {this.state.count ? `${this.state.count} s` : '获取验证码'}
                      </Button>
                    )};
                  }
                }
              ]}
              buttons={(
                <Button htmlType="submit" size="large" type="primary">注册</Button>
              )}
            />
            <Beatle.Link className="elem-login" to="account/login">使用已有账户登录</Beatle.Link>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}
