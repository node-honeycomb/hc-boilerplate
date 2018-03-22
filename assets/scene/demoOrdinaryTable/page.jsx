'use strict';
/* eslint-disable react/prop-types */

const React = require('react');
import Beatle from 'beatle';
const Table1 = require('./coms/table1.jsx');
const debug = require('debug')('demoTable');
import {Button} from 'antd';

require('./page.less');
class DemoTable extends React.Component {
  constructor(props) {
    super(props);
  }
  pullData() {
    this
      .props
      .list
      .getList()
      .then(() => {
        debug('拉取table数据成功');
      });
  }
  render() {
    debug('this.props', this.props);
    return (
      <div className="demo-table">
        <div className="btn-row">
          <span>请求测试：</span>
          <Button onClick={this
            .pullData
            .bind(this)}>点击拉取数据</Button>
        </div>
        {/* 组件使用 */}
        <Table1 data={this.props.list.data}></Table1>
      </div>
    );
  }
}

module.exports = Beatle.connect(['user', 'list'], DemoTable);
