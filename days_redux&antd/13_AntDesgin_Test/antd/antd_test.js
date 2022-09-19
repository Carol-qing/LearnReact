import React,{ Component } from 'react'
import Form1 from './From/02_loginForm'
import Form2 from './From/01_TimeFrom'
import Form3 from './From/03_ModalFrom2'
import { 
    Layout, 
    Menu, 
    Button,
    Row, 
    Col,
    Tag, 
    Icon, 
    Spin,
    Table,
    Modal,
    Radio,
    Input,
    message,
    Tooltip,
    Select,
    Divider,
    Dropdown ,
    InputNumber,
    Checkbox,
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
const options = [
{ label: 'Apple', value: 'Apple' },
{ label: 'Pear', value: 'Pear' },
{ label: 'Orange', value: 'Orange' },
];
const CheckboxWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];
const Tabledata = [
{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
},
{
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
},
{
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
},
];
  
const Tablecolumns = [
{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
},
{
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
},
{
    title: '住址',
    dataIndex: 'address',
    key: 'address',
},
];


export default class App extends Component {
    state = {
        current: 'mail',
        visible: false,
        value:1,
    };

    showModal = () => {
        this.setState({
            visible: true,
    });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    handleMenu = e => {
    console.log('click ', e);
    this.setState({
        current: e.key,
    });
    };

    onNumChange = (value)=>{
        console.log('changed', value);
    }

    onRadioChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };

    onCheckboxChange = (checkedValues)=> {
    console.log('checked = ', checkedValues);
    }

    success = () => {
        message.success('This is a success message');
      };  
    error = () => {
        message.error('This is an error message');
      };  
    warning = () => {
        message.warning('This is a warning message');
      };

    log = (e)=> {
        console.log(e);
      }  
    preventDefault= (e) => {
        e.preventDefault();
        console.log('Clicked! But prevent default.');
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
                        <InputNumber size="large" min={1} max={10} defaultValue={3} onChange={this.onNumChange} />&nbsp;&nbsp;
                        <InputNumber size="default" min={1} max={10} defaultValue={3} onChange={this.onNumChange} />&nbsp;&nbsp;
                        <InputNumber size="small" min={1} max={10} defaultValue={3} onChange={this.onNumChange} /><br/><br/>
                        小数：<InputNumber min={0} max={10} step={0.1}  defaultValue={0.3} onChange={this.onNumChange} />&nbsp;&nbsp;&nbsp;&nbsp;
                        格式化展示：<InputNumber
                            defaultValue={1000}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={this.onChange}
                        />    
                    </div>
                    <Divider />
                    <div>
                        <h3>4.Modal Component</h3>
                        <Button type="primary" onClick={this.showModal}>
                            Open Modal
                        </Button>
                        <Modal
                            title="Basic Modal"
                            centered
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            okText="提交"
                            cancelText="取消"
                        >
                            <p>Some contents...</p>
                        </Modal>&nbsp;&nbsp;
                    </div>
                    <Divider />
                    <div>
                        <h3>5.Radio Component</h3>
                        <Radio>Radio</Radio><br/>
                        <Radio.Group onChange={this.onRadioChange} value={this.state.value}>
                            <Radio value={1}>A</Radio>
                            <Radio value={2}>B</Radio>
                            <Radio value={3}>C</Radio>
                            <Radio value={4}>D</Radio>
                        </Radio.Group>&nbsp;&nbsp;
                        <Radio.Group options={options} onChange={this.onRadioChange}  /><br/>
                        <Radio.Group onChange={this.onRadioChange} defaultValue="a">
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b">Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                    </div>
                    <Divider />
                    <div>
                        <h3>6.Chexkbox Component</h3>
                        <Checkbox.Group
                            options={CheckboxWithDisabled}
                            disabled
                            defaultValue={['Apple','Pear']}
                        />
                        <Checkbox.Group 
                            style={{ width: '100%' }} 
                            onChange={this.onCheckboxChange}
                            defaultValue={['A']}

                        >
                            <Row>
                            <Col span={8}>
                                <Checkbox value="A">A</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="B">B</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="C">C</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="D">D</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="E">E</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="F">F</Checkbox>
                            </Col>
                            </Row>
                        </Checkbox.Group>
                    </div>
                    <Divider />
                    <div>
                        <h3>7.Select Component</h3>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>&nbsp;&nbsp;
                        <Select defaultValue="lucy" style={{ width: 120 }} loading>
                            <Option value="lucy">Lucy</Option>
                        </Select>&nbsp;&nbsp;
                        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                    </div>
                    <Divider />
                    <div>
                        <h3>8.message Component</h3>
                        <Button type="primary" onClick={() =>{message.info('This is a normal message')}}>
                            Display normal message
                        </Button>
                    </div>
                    <Divider />
                    <div>
                        <h3>9.Table Component</h3>
                        <Table columns={Tablecolumns} dataSource={Tabledata} />
                    </div>
                    <Divider />
                    <div>
                        <h3>10.Form Component</h3>
                        <Form1/>
                        <Form2/>
                        <Form3/>
                    </div>
                    <Divider />
                    <div>
                        <h3>11.Grid Component</h3>
                        <Row style={{color:'blue'}}>
                            <Col span={8}>col111</Col>
                            <Col span={8}>col222</Col>
                            <Col span={8}>col333</Col>
                        </Row>

                        {/* offset将列向右偏移 */}
                        <Row style={{color:'red'}}>
                            <Col span={6} offset={6}>
                                col-6 col-offset-6
                            </Col>
                            <Col span={6} offset={6}>
                                col-6 col-offset-6
                            </Col>
                        </Row>
                    </div>
                    <Divider />
                    <div>
                        <h3>12.Menu Component</h3>
                        <Menu onClick={this.handleMenu} selectedKeys={[this.state.current]} mode="horizontal">
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

                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                            key="sub1"
                            title={
                                <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                                </span>
                            }
                            >
                            <Menu.ItemGroup key="g1" title="Item 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="Item 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu
                            key="sub2"
                            title={
                                <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                                </span>
                            }
                            >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            </SubMenu>
                            <SubMenu
                            key="sub4"
                            title={
                                <span>
                                <Icon type="setting" />
                                <span>Navigation Three</span>
                                </span>
                            }
                            >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu> 
                    </div>
                    <Divider />
                    <div>
                        <h3>13.Message Component</h3>
                        <Button onClick={this.success}>Success</Button>&nbsp;&nbsp;
                        <Button onClick={this.error}>Error</Button>&nbsp;&nbsp;
                        <Button onClick={this.warning}>Warning</Button>&nbsp;&nbsp;
                    </div>
                    <Divider />
                    <div>
                        <h3>14.Tag Component</h3>
                        <Tag>Tag 1</Tag>
                        <Tag>
                        <a href="#/">Link</a>
                        </Tag>
                        <Tag closable onClose={this.log}>
                        Tag 2
                        </Tag>
                        <Tag closable onClose={this.preventDefault}>
                        Prevent Default
                        </Tag>
                    </div>
                    <Divider />
                    <div>
                        <h3>15.Spin Component</h3>
                        <Spin size="small" />&nbsp;&nbsp;
                        <Spin />&nbsp;&nbsp;
                        <Spin size="large" />&nbsp;&nbsp;
                    </div>
                            
                    </Content>            
                </Layout>

            </Layout>
        </Layout>
    )
  }
}