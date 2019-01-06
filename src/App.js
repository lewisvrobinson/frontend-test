import React, { Component } from 'react'
import AddCounter from './components/AddCounter'
import CounterList from './components/CounterList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AddCounter />
        <CounterList />
      </div>
    )
  }
}
