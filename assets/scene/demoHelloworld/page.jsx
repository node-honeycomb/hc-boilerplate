'use strict';
/* eslint-disable react/prop-types */

const React = require('react');
const Beatle = require('beatle');
const classnames = require('classnames');
const SliderBar = require('../../coms/sliderbar/sliderbar.jsx');

require('./page.less');
class DemoHelloworld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  onCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    let sliderbarClass = classnames({'slider-bar': true, 'slider-bar-collapse': this.state.collapsed});
    let contentClass = classnames({content: true, 'content-collapse': this.state.collapsed});

    return (
      <div className="app-page">
        <header className="header">
          <a href="" className="logo">
            <img src={window.CONFIG.prefix + '/assets/static/img/logo.png'} alt="logo" />
            <span className="logo-test">Antd Design Demo</span>
          </a>
        </header>
        <div className="content-body">
          <SliderBar
            className={sliderbarClass}
            collapsed={this.state.collapsed}
            onCollapsed={this.onCollapsed.bind(this)} />
          <div className={contentClass}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Beatle.connect(['user', 'list'], DemoHelloworld);
