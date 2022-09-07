import React,{ Component } from 'react'

const DetailInfo =[
  {id:'01',content:'你好,中国'},
  {id:'02',content:'你好,React'},
  {id:'03',content:'你好,XXQ'},
]
  

export default class Detail extends Component {
  render() {
    console.log(this.props);
    const {id,title} = this.props.match.params
    const findResult = DetailInfo.find((obj)=>{
      return obj.id ===id
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