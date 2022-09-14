import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './07-antd/04_From/03_ModalFrom'
import 'antd/dist/antd.css'


const container = document.getElementById('root');
const root = createRoot(container)

root.render(<App/>)
