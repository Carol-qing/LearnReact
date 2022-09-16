import { Menu, Dropdown, Button, Icon, message} from 'antd';
import React,{ Component } from 'react'
import 'antd/dist/antd.css'

const menu = (
    <Menu>
      <Menu.Item key="1">
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        3rd item
      </Menu.Item>
    </Menu>
  );

export default class App extends Component {
  handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  render() {
    return (
       <div>
         <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
        <hr/>
        <Dropdown style={{ marginBottom: 16 }} overlay={menu}>
            <Button type='primary'>
                Button <Icon type="down" />
            </Button>
        </Dropdown>
        <hr/>
        <Dropdown.Button onClick={this.handleButtonClick} overlay={menu}>
          Dropdown
        </Dropdown.Button>
        <hr/>
        {/* trigger={['click']}点击触发下拉菜单 */}
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Click me <Icon type="down" />
          </a>
        </Dropdown>
       </div>
    )
  }
}