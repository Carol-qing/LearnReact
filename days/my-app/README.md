# 第五章：React路由
## 十、一般组件和路由组件
        1.写法
         一般组件：<Demo/>
         路由组件：<Route path="/demo" component={Demo}/>
        2.存放位置
        3.接收的props
            一般组件：写组件标签时传递什么就能收到什么
            路由组件：接收到三个固定的属性
                history:
                    go(n);
                    goback();
                    goForward();
                    push(path,state);
                    history(path,state);
                location:
                    pathname:"/demo";
                    search:"";
                    state
                match:
                    params;
                    path:'';
                    url:'';
## 十一、向路由组件传递参数
        1.params参数
            路由链接（携带参数）：<Link to="/XXX/YY/tom/${}"></Link>
            注册路由（声明接收）：<Route path='/XXX/YY/:name/:age' component={}/>
            子组件接收参数：this.props.match.params
        2.search参数
            路由链接（携带参数）：<Link  to="/XXX/YY/?name=tom&age=${}"></Link>
            注册路由（声明接收）：<Route path='/XXX/YY' component={}/>
            子组件接收参数：this.props.location.search
            注：要借助querystring-es3库进行解析对象
        3.state参数
            路由链接（携带参数）：<Link  to={{path:'' ,state:{name:'tom',age:18}}}></Link>
            注册路由（声明接收）：<Route path='/XXX/YY' component={}/>
            子组件接收参数：this.props.location.state

## 十二、路由的跳转
        1.push (默认模式)
        一步一步推入栈，留下历史记录
        2.replace(替换，把最栈顶的替换掉)
        不会留下历史记录

## 十三、编程式路由导航(history)
        this.props.history.go(n)
        this.props.history.goBack()
        this.props.history.goForward()
        this.props.history.replace()
        this.props.history.push()
## 十四、高级路由的通配符
    import {withRouter} from 'react-router-dom'
    withRouter ：加工一般组件，可以使用路由组件的方法，返回一个新组件

# 第七章： redux
多个组件共享状态

## redux三大核心概念