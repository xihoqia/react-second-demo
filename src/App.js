import React from 'react'
import routes from './routes'
import {useRoutes } from 'react-router-dom'

import counterStore from './store/counter'

import { observer } from 'mobx-react-lite'

 function App() {
  const element=useRoutes(routes)

  return (
  
      <div className="App">
         {/* {counterStore.count}
      <button onClick={counterStore.addCount}>+</button> */}
      {element}
      </div>
   
  )
}

export default observer(App)
