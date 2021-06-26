import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ConfigProvider} from "antd";
import 'antd/dist/antd.css'
import zhCN from 'antd/lib/locale/zh_CN';
import './styles.scss'

ReactDOM.render((
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
), document.getElementById('root'));
