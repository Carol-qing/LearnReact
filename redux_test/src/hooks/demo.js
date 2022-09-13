import React from 'react'
import {testState} from './10_HooksProxyStore';

export default React.memo(function renderArea(){
    const [test,setTest] = testState.addDependency('renderArea')
    function changeValue(){
        setTest({any:'好好学习'})
    }
    return(
    <div>
        <button onClick={changeValue}>点击</button><br/>
        {test.any}<br/>
    </div>
    )
})