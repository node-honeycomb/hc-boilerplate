'use strict';
/* eslint-disable react/prop-types */

const React = require('react');
const Beatle = require('beatle');
const Table2 = require('./coms/table2.jsx');
const debug = require('debug')('demoFilterTable');

import {Button} from 'antd';
require('./page.less');

class DemoTable extends React.Component {
  constructor(props) {
    super(props);
  }
  pullData() {
    this.props.list.getList()
      .then(() => {
        debug('拉取table数据成功');
      });
  }
  render() {
    return (
      <div className="demo-table">
        <div className="btn-row">
          <span>请求测试：</span>
          <Button onClick={this
            .pullData
            .bind(this)}>点击拉取数据</Button>
        </div>
        {/* 组件使用 */}
        <Table2 data={this.props.list.data}></Table2>
      </div>
    );
  }
}

module.exports = Beatle.connect(['list'], DemoTable);
