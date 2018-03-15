import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Steps from 'antd/lib/steps';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';

import {Result} from 'hc-components';
import './index.less';
export default class flowResultScene extends Component {
  static routeOptions = {
    title: '流程单据',
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
        name: '返回列表'
      },
      {
        type: 'default',
        size: 'default',
        name: '查看项目'
      },
      {
        type: 'default',
        size: 'default',
        name: '打印'
      }
    ];
    return (<Result
      className="j-com-flowResult"
      type='success'
      title="流程单据提交成功"
      description="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
      extra={(<div className="elem-flow-box">
        <h3>项目名称</h3>
        <Row>
          <Col span="6"> <span>项目 ID：</span> 23421 </Col>
          <Col span="6"> <span>负责人：</span> 曲丽丽 </Col>
          <Col span="12"> <span>生效时间：</span> 2016-12-12 ~ 2017-12-12 </Col>
        </Row>
        <Steps progressDot current={1}>
          <Steps.Step title="创建项目" description={(
            <div>
              <p>曲丽丽<Icon type="dingding-o" /></p>
              <div>2016-12-12 12:32</div>
            </div>
          )} />
          <Steps.Step title="部门初审" description={(
            <div>
              <p>周毛毛<Icon type="dingding-o" /></p>
              <div><a href="">催一下</a></div>
            </div>
          )} />
          <Steps.Step title="财务复核" />
          <Steps.Step title="完成" />
        </Steps>
      </div>)}
      links={links}
    />);
  }
}
