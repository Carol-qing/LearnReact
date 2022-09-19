import {React,useRef,useState} from 'react'

export default function Demo(){
    const [list,setList] = useState(['aa','bb','cc'])
    const mytext = useRef() //React.createRef()
    const handleAdd =()=>{
        console.log(mytext.current.value);
        setList([...list,mytext.current.value])
        console.log(list);
    }
    return(
        <div>
            <input ref={mytext}/>
            <button onClick={handleAdd}>点击</button>
            <ul>
                {
                    list.map((item)=>
                        <li key={item}>
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}