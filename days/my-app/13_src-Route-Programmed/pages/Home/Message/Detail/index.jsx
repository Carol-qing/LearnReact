import React,{ Component } from 'react'
// import qs from 'querystring-es3'

// let obj = {name:'tom',age:'18'}
// console.log(qs.stringify(obj));

const DetailInfo =[
  {id:'01',content:'你好,中国'},
  {id:'02',content:'你好,React'},
  {id:'03',content:'你好,XXQ'},
]

export default class Detail extends Component {
  render() {
    console.log(this.props);

    const {id,title} = this.props.location.state || {} //state参数

    // const {search} =this.props.location //接收search参数
    // const {id,title} =qs.parse(search.slice(1)) //借助querystring-es3解析
    
    // const {id,title} = this.props.match.params //接收params参数
    
    const findResult = DetailInfo.find((obj)=>{
      return obj.id === id
    })


    return (
       <div>

            <li>ID:{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{findResult.content}</li> 
       </div>
    )
  }
}