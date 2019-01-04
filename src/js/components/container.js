import React, { Component } from 'react'
import Counter from '../components/counter';
import Input from '../components/input'


export default class Container extends Component {
  render() {
    return (
      <div>
        <Input />
        <Counter />
      </div>
    )
  }
}