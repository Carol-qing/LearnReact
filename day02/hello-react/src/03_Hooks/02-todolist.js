import React,{useState} from 'react'

export default function App() {
    const [text,setText] = useState("")
    const [list,setlist] = useState(["aa","bb","cc"])
    const handelChange = (evt)=>{
        setText(evt.target.value)

    }
    const handleAdd = ()=>{
        console.log(text);
        setlist([...list,text])
        setText("")
        console.log("@",text);
    }

    return (
        <div>
            <input onChange={handelChange}/>
            <button onClick={handleAdd}>add</button>
            <ul>
            {
                list.map(item=>
                    <li key={item}>
                    {item}
                    </li>
                )
            }
            </ul>
        </div>
    )
}