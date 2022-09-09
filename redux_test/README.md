# 第七章： redux
多个组件共享状态

## redux三大核心概念
    1.action (type,data)
    2.store
        store.subscribe(()=>{})
        store.dispatch({type:'',data:})
        store.getState()
    3.reducer (preState,action)

## 求和案例
(2）.src下建立：
        -redux
            -store.js
            -count_reducer.js
            -count_action.js
            -countant.js:放置容易写错的常量，可在全局引入使用
(3)store.js
    1).引入redux中的legacy_createStore
    2).传入一个为其服务的reducer
    3).暴露出去
(4)count_reducer.js
    1).reducer的本质上是函数。纯函数
    2).reducer有两个作用：初始化状态，加工状态
    3).reducer传递的preState是undefined（要自己去赋值定义—）
        传递的action：{type:方法名,data:value}
(5)count_action.js
    1).创建action对象
    2).暴露出去
    3).存在同步action和异步action

# 通信方式
    ## 通过标签
        父传子key-value
        <A>
            <B a=""/>
        </A>
        子接父this.props

    ## react-redux
    原理：容器组件连接redux和UI组件，靠react-redux的connect函数
    容器组件与UI组件的父子组件
     connect(mapStateToProps,mapDispatchToProps)(UI组件名)
        -mapStateToProps：映射状态，返回一个对象值
        -mapDispatchToProps：映射状态方法（可以写成函数也可以写成对象


    优化：
        1.容器组件的简写优化：
        mapDispatchToProps可以简写成一个对象
        connect(
            state = ({key:value}),
            {key:XXXAction}
        )(UI组件)
        UI组件通过this.props.XXXX读取和操作状态
        2.import {Provider} from 'react-redux'代替监测redux中状态的改变
        3.容器组件和UI组件整合成一个组件

注：如果要传递一个对象，箭头函数写法应该是() =>({})

## 组件数据共享
    1.Count组件和Person组件的Reducer在store中要使用combineReducers进行合并；合并后的总状态是一个对象！！！！
    2.在容器组件中通过connect({key:value})(子组件)

### 拓展
    1.  npm add nanoid (作用：使得id有唯一的标识)
        import {nanoid} from 'nanoid'
        id：nanoid()

    2.react中很少使用改变数组的一些方法，push；
        reducer是纯函数，不能改变参数，而数组的方法会改变数组