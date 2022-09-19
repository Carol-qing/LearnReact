import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './antd/antd_test'
import 'antd/dist/antd.css'


const container = document.getElementById('root');
const root = createRoot(container)

root.render(<App/>)
