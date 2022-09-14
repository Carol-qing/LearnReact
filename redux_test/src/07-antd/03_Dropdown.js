import { Menu, Dropdown, Button, Icon} from 'antd';
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
  render() {
    return (
       <div>
        <Dropdown overlay={menu}>
            <Button type='primary'>
                Button <Icon type="down" />
            </Button>
        </Dropdown>
       </div>
    )
  }
}