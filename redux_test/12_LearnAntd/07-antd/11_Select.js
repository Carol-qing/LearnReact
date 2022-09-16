import React,{ Component } from 'react'
import { Select } from 'antd';

const { Option } = Select;

export default class App extends Component {
    handleChange = (value)=> {
        console.log(`selected ${value}`);
      }
    render() {
        return (
        <div>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select defaultValue="lucy" style={{ width: 120 }} loading>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                    <Option value="lucy">Lucy</Option>
                </Select>
        </div>
        )
    }
}