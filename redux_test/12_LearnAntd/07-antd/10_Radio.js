import React,{ Component } from 'react'
import { Radio } from 'antd'

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

export default class App extends Component {
    state = {
        value: 1,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
      onChange2 = e => {
        console.log('radio2 checked', e.target.value);
        this.setState({
          value2: e.target.value,
        });
      };
      onChange3 = e => {
        console.log('radio3 checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    render() {
        return (
        <div>
                <Radio>Radio</Radio>
                <hr/>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Radio.Group>
                <hr/>
                <Radio.Group options={options} onChange={this.onChange2}  />
                <hr/>
                <Radio.Group onChange={this.onChange3} defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
        </div>
        )
    }
}