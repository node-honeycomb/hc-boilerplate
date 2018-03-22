import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

export default class ViewSource extends React.PureComponent {
  static propTypes = {
    file: PropTypes.string
  }

  state = {
    visible: false
  }

  render() {
    return (
      <div>
        <Button type="ghost" size="large" onClick={() => this.setState({visible: !this.state.visible})}><Icon type="eye" />查看源代码</Button>
        {this.state.visible ? (<iframe style={{
          textAlign: 'left',
          marginTop: 20,
          border: '1px solid #ddd',
          width: '100%'
        }}
        onLoad={(e) => {
          e.target.style.height = (e.target.contentDocument.documentElement.scrollHeight + 10) + 'px';
        }}
        src={this.props.file ? window.CONFIG.prefix + '/assets/static/' + this.props.file.slice(2, -4).replace(/[\\/]/g, '_') + '.html' : 'about:blank'}
        >
        </iframe>) : null}
      </div>
    );
  }
}
