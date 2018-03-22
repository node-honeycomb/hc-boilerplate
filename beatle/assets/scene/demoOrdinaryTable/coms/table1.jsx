'use strict';
/* eslint-disable react/prop-types */

const React = require('react');
const debug = require('debug')('demoTable1');
import {Table} from 'antd';

require('./table1.less');
class Table1 extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    // rowSelection object indicates the need for row selection
    this.rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        debug(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        debug(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        debug(selected, selectedRows, changeRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
  }
  render() {
    return (
      <div className="table1">
        <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.props.data} />
      </div>
    );
  }
}

module.exports = Table1;

