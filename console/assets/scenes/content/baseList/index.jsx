import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Table from 'antd/lib/table';
import Beatle from 'beatle';

class BaseListScene extends Component {
  static routeOptions = {
    title: '基础列表',
    layout: ['consoleLayout', 'contentLayout']
  }

  static propTypes = {
    list: PropTypes.object
  }

  componentDidMount() {
    this
      .props
      .list
      .getList();
  }

  render() {
    const {list} = this.props.list;
    const columns = [{
      dataIndex: 'name',
      title: '名称'
    }, {
      dataIndex: 'description',
      title: '描述'
    }, {
      dataIndex: 'gmtCreate',
      title: '创建时间'
    }, {
      dataIndex: 'gmtModified',
      title: '更新时间'
    }];
    return (
      <div className="j-scene j-scene-baseList">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={list.data}
          loading={list.metric.loading} />
      </div>
    );
  }
}

export default Beatle.connect(['list'], BaseListScene);
