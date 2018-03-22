'use strict';
/* eslint-disable react/prop-types */

const React = require('react');
const _ = require('lodash');
const debug = require('debug')('demoTable2');
import {Table, Button} from 'antd';

require('./table2.less');
class Table2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredInfo: null,
      sortedInfo: null,
      data: []
    };
  }
  componentWillReceiveProps(nextProps) {
    let _newState = _.cloneDeep(this.state);
    _newState.data = _.cloneDeep(nextProps.data);
    this.setState(_newState);
  }
  handleChange(pagination, filters, sorter) {
    debug('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  clearFilters() {
    this.setState({filteredInfo: null});
  }
  clearAll() {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  }
  setAgeSort() {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }
  render() {
    let {sortedInfo, filteredInfo} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {text: 'Joe', value: 'Joe'},
        {text: 'Jim', value: 'Jim'},
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        {text: 'London', value: 'London'},
        {text: 'New York', value: 'New York'},
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    }];
    return (
      <div className="table2">
        <div className="table-operations">
          <Button onClick={this.setAgeSort.bind(this)}>Sort age</Button>
          <Button onClick={this.clearFilters.bind(this)}>Clear filters</Button>
          <Button onClick={this.clearAll.bind(this)}>Clear filters and sorters</Button>
        </div>
        <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

module.exports = Table2;
