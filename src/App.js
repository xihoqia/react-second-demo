import React from 'react'
import routes from './routes'
import {useRoutes } from 'react-router-dom'


import { observer } from 'mobx-react-lite'

 function App() {
  const element=useRoutes(routes)

  return (
  
      <div className="App">
      {element}
      </div>
   
  )
}

export default observer(App)
