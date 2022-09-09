import React,{ Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux';
import {createAddPersonAction} from '../../redux/actions/person_action'

class Person extends Component {
    addPerson = ()=>{
        console.log(this);
        const name = this.name.value
        const age = this.age.value
        const personObj = {id:nanoid(),name,age}
        this.props.add(personObj);
    }
    render() {
        return (
        <div>
                <input ref={c=>this.name =c} type="text" placeholder='输入名字' />
                <input ref={d=>this.age =d} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map((p)=>{
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
        </div>
        )
    }
}

export default connect(
    state => ({
        person:state.person
    }),
    {
        add:createAddPersonAction
    }
)(Person)