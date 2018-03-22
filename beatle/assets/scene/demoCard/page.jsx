'use strict';

let React = require('react');
const Beatle = require('beatle');
import {Row, Col, Card} from 'antd';
require('./page.less');

class DemoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="demo-card">
        {/* 四格结构 */}
        <Row gutter={32} className="card-row">
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={32} className="card-row">
          <Col span={18}>
            <Card className="center-card">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Row>
              <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
            <Row className="card-row">
              <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </Col>
        </Row>
        {/* 三格结构 */}
        <Row gutter={32} className="card-row">
          <Col span={8}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        {/* 两格结构 */}
        <Row gutter={32} className="card-row">
          <Col span={12}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

module.exports = Beatle.connect(['user', 'list'], DemoCard);
