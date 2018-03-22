'use strict';
/* eslint-disable react/prop-types */

let React = require('react');
const dialogWrapper = require('beatle-dialog');
import {Modal} from 'antd';

require('./modal.less');
class TestModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        title="Basic Modal"
        className="test-modal"
        visible={this.props.visible}
        onOk={this.props.handleOk}
        onCancel={this.props.onCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

module.exports = dialogWrapper(['list', 'user'], TestModal);
