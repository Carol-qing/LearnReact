import React,{ Component } from 'react'
import { InputNumber } from 'antd';

export default class App extends Component {
    onChange = (value)=>{
        console.log('changed', value);
    }
    render() {
        return (
        <div>
                <InputNumber size="large" min={1} max={10} defaultValue={3} onChange={this.onChange} /><br/><br/>
                <InputNumber size="default" min={1} max={10} defaultValue={3} onChange={this.onChange} /> <br/><br/>
                <InputNumber size="small" min={1} max={10} defaultValue={3} onChange={this.onChange} /> <br/><br/>
                <p>小数：</p><InputNumber min={0} max={10} step={0.1}  defaultValue={0.3} onChange={this.onChange} />
                <h4>格式化展示：</h4>
                <InputNumber
                    defaultValue={1000}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={this.onChange}
                />
        </div>
        )
    }
}