import React,{ Component } from 'react'
import {Row, Col} from 'antd';

// 24等分
export default class App extends Component {
  render() {
    return (
       <div>
            <Row>
                <Col span={8}>col111</Col>
                <Col span={8}>col222</Col>
                <Col span={8}>col333</Col>
            </Row>

          {/* offset将列向右偏移 */}
            <Row>
              <Col span={6} offset={6}>
                col-6 col-offset-6
              </Col>
              <Col span={6} offset={6}>
                col-6 col-offset-6
              </Col>
            </Row>
       </div>
    )
  }
}