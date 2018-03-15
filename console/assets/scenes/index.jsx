import React from 'react';
import PropTypes from 'prop-types';

import Card from 'antd/lib/card';
import Modal from 'antd/lib/modal';

import Beatle from 'beatle';
import DocumentTitle from 'react-document-title';
import {ContainerQuery} from 'react-container-query/dist/react-container-query';
import classNames from 'classnames';

import {browserHistory} from 'react-router';
import {getLayout, GModal} from 'hc-components';
import ViewSource from './viewSource';
import './index.less';

class Root extends React.PureComponent {
  static routeOptions = true;

  static propTypes = {
    children: PropTypes.node,
    user: PropTypes.object
  }

  state = {
    fpath: null
  }

  componentDidMount() {
    this.props.user.getProfile();
    browserHistory.listen(location =>  {
      const route = Beatle.route(location.pathname) || Beatle.route(location.pathname.slice(1));
      this.setState({
        fpath: route && route.fpath
      });
    });
  }

  mediaQuery = {
    'screen-xs': {
      maxWidth: 575,
    },
    'screen-sm': {
      minWidth: 576,
      maxWidth: 767,
    },
    'screen-md': {
      minWidth: 768,
      maxWidth: 991,
    },
    'screen-lg': {
      minWidth: 992,
      maxWidth: 1199,
    },
    'screen-xl': {
      minWidth: 1200,
    },
  };

  getRoutes() {
    if (this.routes) {
      return this.routes;
    } else {
      const arr = ['account', 'dashboard', 'content', 'detail', 'form', 'feedback'];
      const routes = Beatle.getRoutes()[0].childRoutes || [];
      return this.routes = routes.sort((a, b) => {
        const aName = a.children ? a.name : a.navKey || a.name;
        const bName = b.children ? b.name : b.navKey || b.name;
        return arr.indexOf(aName) - arr.indexOf(bName);
      });
    }
  }

  get layoutOption() {
    return {
      routes: this.getRoutes(),
      subRoutes: {
        account: {
          icon: 'user',
          title: '账户'
        },
        dashboard: {
          icon: 'dashboard',
          title: '仪表板'
        },
        content: {
          icon: 'table',
          title: '列表页'
        },
        detail: {
          icon: 'profile',
          title: '详情页'
        },
        form: {
          icon: 'form',
          title: '表单页'
        },
        feedback: {
          icon: 'check-circle-o',
          title: '反馈'
        }
      },
      components: {
        Header: {
          nick: this.props.user.profile.name,
          avatar: this.props.user.profile.avatar
        },
        Sider: {
          brand: {
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            title: 'Beatle App'
          },
          getResolvePath: Beatle.getResolvePath
        },
        Brand: {
          logo: 'https://img.alicdn.com/tfs/TB131CMk5qAXuNjy1XdXXaYcVXa-32-32.svg',
          title: 'Beatle App'
        },
        Footer: {
          links: [
            {
              title: '帮助',
              href: ''
            }, {
              title: '隐私',
              href: ''
            }, {
              title: '条款',
              href: '',
              blankTarget: true
            }
          ],
          copyright: (<div>
            Beatle-Group 样板库
            <ViewSource file={this.state.fpath} />
          </div>)
        },
        Link: Beatle.Link
      }
    };
  }

  renderOviewview() {
    return (
      <Card><img src="https://img.alicdn.com/tfs/TB1aJyMk5qAXuNjy1XdXXaYcVXa-750-3883.png" /></Card>
    );
  }

  render() {
    const viewContent = this.props.children || this.renderOviewview();
    const route = this.props.children && this.props.children.props.route;
    const layout = getLayout({
      layoutOption: this.layoutOption,
      layout: 'ConsoleLayout',
      route: route
    }, viewContent);
    return (
      <DocumentTitle title={(route ? route.title + ' - ' : '') + '管控台'}>
        <ContainerQuery query={this.mediaQuery}>
          {params => (<div className={classNames(Object.assign(params, {'j-scene-root': true}))}>{layout}<GModal component={Modal} /></div>)}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default Beatle.connect(['user'], Root);
