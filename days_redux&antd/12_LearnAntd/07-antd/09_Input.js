import React,{ Component } from 'react'
import { Input, Icon, Select, Tooltip } from 'antd';

const { Option } = Select;
const {TextArea, Search} = Input

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
  render() {
    return (
       <div>
            <Input style={{ marginTop: 16, marginBottom:16, width: 200}} placeholder="Basic usage" />
            <hr/>
            <div style={{ marginBottom: 16 }}>
                <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
            </div>
            <hr/>
            <Input
                placeholder="Enter your username"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                    <Tooltip title="Extra information">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <hr/>
            <TextArea style={{ marginBottom: 16 }} rows={4} defaultValue={'输入框默认值'} allowClear/>
            <TextArea
                placeholder="Autosize height with minimum and maximum number of lines"
                autoSize={{ minRows: 1, maxRows: 6 }}
            />
            <hr/>
            <Input.Password style={{ marginTop: 16, marginBottom:16, width: 400}} placeholder="input password" />
            <hr/>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />   
       </div>
       
    )
  }
}