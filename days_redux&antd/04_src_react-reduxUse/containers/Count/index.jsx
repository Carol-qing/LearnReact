import CountUI from '../../components/Count'
// 引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// mapStateToProps函数的返回值作为状态传递给UI组件-key:value ——状态
function mapStateToProps(state) {
    return {count:state} //<CountUI n={}>
}

// b函数的返回值作为状态传递给UI组件-key:value ——操作状态方法
function mapDispatchToProps(dispatch) {
    return {
        jia:data => dispatch(createIncrementAction(data)), // 通知redux执行加法
        jian: data => dispatch(createDecrementAction(data)),
        jiaAsync:(data,time) => dispatch(createIncrementAsyncAction(data,time))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
