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
        传递的action：{type:'',data:''}
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
        -mapStateToProps：
        -mapDispatchToProps：

