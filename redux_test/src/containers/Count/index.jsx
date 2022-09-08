import CountUI from '../../components/Count'
// 引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//映射状态(优化格式)
//  const  mapStateToProps = state =>({count:state} )


// 映射状态的方法(优化格式)
// const mapDispatchToProps = dispatch =>(
//     {
//         jia:data => dispatch(createIncrementAction(data)),
//         jian: data => dispatch(createDecrementAction(data)),
//         jiaAsync:(data,time) => dispatch(createIncrementAsyncAction(data,time))
//     }
// )

export default connect(
    state =>({count:state} ),
    dispatch =>(
        {
            jia:data => dispatch(createIncrementAction(data)),
            jian: data => dispatch(createDecrementAction(data)),
            jiaAsync:(data,time) => dispatch(createIncrementAsyncAction(data,time))
        }
    )
    )(CountUI)
