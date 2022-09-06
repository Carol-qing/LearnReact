import React,{useState} from 'react'

export default function App() {
    const [name,setName] = useState("kiki")
    const [age,setAge] = useState(30)

    // console.log(obj);

    return (
        <div>
            <button onClick={()=>{
                setName("xxq")
                setAge(18)
            }}>改名</button>
            app-{name}{age}
        </div>
    )
}