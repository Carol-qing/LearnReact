import React,{ Component } from 'react'
import { 
    Layout, 
    Menu, 
    Button,
    Breadcrumb, 
    Row, 
    Col, 
    Icon, 
    Dropdown ,
    Input,
    Tooltip,
    Select,
    Divider,
    InputNumber
} from 'antd';

const { Header, Content, Sider } = Layout;
const {TextArea, Search} = Input;
const { SubMenu } = Menu;
const { Option } = Select;
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
  const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );


export default class App extends Component {
    state = {
        current: 'mail',
      };
    
    handleMenu = e => {
    console.log('click ', e);
    this.setState({
        current: e.key,
    });
    };
    onChange = (value)=>{
        console.log('changed', value);
    }
  render() {
    return (
        <Layout>
            <Header>
                <Row>
                    <Col span={8}>
                        <Menu 
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}>
                        <Menu.Item>nav 1</Menu.Item>
                        <Menu.Item>nav 2</Menu.Item>
                        <Menu.Item>nav 3</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={16}>
                    2222
                    </Col>
                </Row>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                subnav 1
                            </span>
                            }
                        >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                subnav 2
                            </span>
                            }
                        >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>    
                    </Menu>
                </Sider>
            
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Menu  onClick={this.handleMenu} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="1">
                        <Icon type="mail" />
                        Navigation One
                        </Menu.Item>
                        <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                            <Icon type="setting" />
                            Navigation Three - Submenu
                            </span>
                        }
                        >
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="4">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Navigation Four - Link
                        </a>
                        </Menu.Item>
                        <Menu.Item key="2" disabled>
                        <Icon type="appstore" />
                        Navigation2
                        </Menu.Item>
                    </Menu>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            overflow:'scroll'
                        }}
                    >
                    <div >
                    <h3>1.Dropdown Component</h3>
                       <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <Icon type="down" />
                        </a>
                        </Dropdown>&nbsp;&nbsp;
                        <Dropdown style={{ marginBottom: 16 }} overlay={menu}>
                            <Button type='primary'>
                                Button <Icon type="down" />
                            </Button>
                        </Dropdown>&nbsp;&nbsp;
                        <Dropdown.Button onClick={this.handleButtonClick} overlay={menu}>
                        Dropdown
                        </Dropdown.Button>&nbsp;&nbsp;
                        <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Click me <Icon type="down" />
                        </a>
                        </Dropdown>
                    </div>
                    <Divider />
                    <div>
                        <h3>2.Input Component (Connect Tooltip, Select,Icon )</h3>
                        <Input style={{ marginTop: 16, marginBottom:16, width: 200}} placeholder="Basic usage" />
                        <div style={{ marginBottom: 16 }}>
                            <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
                        </div>
                        <Input
                            placeholder="Enter your username"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={
                                <Tooltip title="Extra information">
                                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        />
                        <TextArea style={{ marginBottom: 16 }} rows={4} defaultValue={'input value'} allowClear/>
                        <TextArea
                            placeholder="Autosize height with minimum and maximum number of lines"
                            autoSize={{ minRows: 1, maxRows: 6 }}
                        />
                        <Input.Password style={{ marginTop: 16, marginBottom:16, width: 400}} placeholder="input password" />
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />   
                    </div>
                    <Divider />
                    <div>
                        <h3>3.NumberInput Component</h3>
                        <InputNumber size="large" min={1} max={10} defaultValue={3} onChange={this.onChange} />&nbsp;&nbsp;
                        <InputNumber size="default" min={1} max={10} defaultValue={3} onChange={this.onChange} />&nbsp;&nbsp;
                        <InputNumber size="small" min={1} max={10} defaultValue={3} onChange={this.onChange} /><br/><br/>
                        小数：<InputNumber min={0} max={10} step={0.1}  defaultValue={0.3} onChange={this.onChange} />&nbsp;&nbsp;&nbsp;&nbsp;
                        格式化展示：<InputNumber
                            defaultValue={1000}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={this.onChange}
                        />    
                    </div>
                    
                    </Content>            
                </Layout>

            </Layout>
        </Layout>
    )
  }
}