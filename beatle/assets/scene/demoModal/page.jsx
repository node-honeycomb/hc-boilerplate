'use strict';
/* eslint-disable react/prop-types */

let React = require('react');
const app = require('beatle').getApp('app');
const TestModal = require('./coms/modal.jsx');
import {Button, Modal} from 'antd';

require('./page.less');
class DemoModal extends React.Component {
  constructor(props) {
    super(props);
    // 需要修改
    this.state = {
      testModal: {
        isShow: false,
        data: {}
      }
    };
  }
  showModal() {
    TestModal.createDialog(this.state.testModal.data);
  }
  showInfo() {
    Modal.info({title: 'This is a notification message', content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ), onOk() {}});
  }
  showSuccess() {
    Modal.success({title: 'This is a success message', content: 'some messages...some messages...'});
  }
  showError() {
    Modal.error({title: 'This is an error message', content: 'some messages...some messages...'});
  }
  showWarning() {
    Modal.warning({title: 'This is a warning message', content: 'some messages...some messages...'});
  }
  render() {
    return (
      <div className="demo-app">
        <div>
          <Button onClick={this
            .showModal
            .bind(this)}>打开浮层</Button>
        </div>
        <div>
          <Button onClick={this.showInfo}>Info</Button>
          <Button onClick={this.showSuccess}>Success</Button>
          <Button onClick={this.showError}>Error</Button>
          <Button onClick={this.showWarning}>Warning</Button>
        </div>
      </div>
    );
  }
}

module.exports = app.connect(['list', 'user'], DemoModal, true);
