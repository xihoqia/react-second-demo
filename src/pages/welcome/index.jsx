import React from 'react'
import './index.css'
import Bar from "../../components/Bar"
export default function Welcome() {
  return (
    <>
    <h2>欢迎</h2>
    <div className="home" style={{display:'flex'}}>
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        sData={[50, 60, 70]}
        title='三大框架满意度' />

      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        sData={[50, 60, 70]}
        title='三大框架使用度' />
    </div>
   
    </>
    
    
  )
}
