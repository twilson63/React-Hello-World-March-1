import React from 'react'
import MyFuncComponent from './components/my-func-component'
import MyComponent from './components/my-component'
import MyClassComponent from './components/my-class-component'

class App extends React.Component {
  render () {
    return (
      <div>
        <MyComponent title="My Component" />
        <MyFuncComponent title="My Func Component" />
        <MyClassComponent title="My Class Component" />
      </div>
    )
  }
}

export default App
