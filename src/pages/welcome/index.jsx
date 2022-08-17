import React from 'react'
import './index.css'
import {RightOutlined} from '@ant-design/icons'
export default function Welcome() {
  return (
    <>
    <h2>欢迎</h2>
    <div>
     <h2>欢迎使用Ant Design Pro</h2>
      <h4>Ant Design Pro 是一个整合了 umi，Ant Design 和 ProComponents 的脚手架方案。致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。</h4>
     <div className='welcome-item'>
        <h3>1   了解 umi</h3>
        <span>umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的,支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。</span>
        <a href='welcome'>了解更多 <RightOutlined /> </a>
     </div>
     <div className='welcome-item'>
        <h3>2   了解  ant design</h3>
        <span>antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。</span>
        <a href='welcome'>了解更多 <RightOutlined /> </a>
     </div>
     <div className='welcome-item'>
        <h3>3   了解 Pro Components</h3>
        <span>ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。</span>
        <a href='welcome'>了解更多 <RightOutlined /> </a>
     </div>
    </div>
    </>
    
    
  )
}
