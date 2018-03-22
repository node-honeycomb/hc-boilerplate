'use strict';
/* eslint-disable react/prop-types */

const React = require('react');
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const prefix = window.CONFIG.prefix || 'example';
import PropTypes from 'prop-types';

require('./sliderbar.less');
class Sliderbar extends React.Component {
  constructor(props) {
    super(props);
  }
  changeMenu(item) {
    let path = item.key;
    this.context.router.push(path);
  }
  render() {
    return (
      <div className={this.props.className}>
        <Menu
          className="menu"
          defaultSelectedKeys={['5']}
          defaultOpenKeys={['sub1']}
          onClick={this.changeMenu.bind(this)}
          mode="inline"
          inlineCollapsed={this.props.collapsed}
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Table</span></span>}>
            <Menu.Item key={prefix + '/table/ordinary'}>
              <Icon type="inbox" />
              <span>普通Table</span>
            </Menu.Item>
            <Menu.Item key={prefix + '/table/filter'}>
              <Icon type="appstore" />
              <span>排序,过滤器Table</span>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key={prefix + '/modal'}>
            <Icon type="pie-chart" />
            <span>Modal</span>
          </Menu.Item>
          <Menu.Item key={prefix + '/card'}>
            <Icon type="desktop" />
            <span>Card</span>
          </Menu.Item>
        </Menu>
        <div className="footer" onClick={this.props.onCollapsed}>
          <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
      </div>
    );
  }
}

Sliderbar.contextTypes = {
  router: PropTypes.object
};

module.exports = Sliderbar;
