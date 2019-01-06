import React, { Component } from 'react'
import AddCounter from './components/AddCounter'
import CounterList from './components/CounterList'
import Total from './components/Total'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 4em auto 0 auto;
  width: 600px;
  max-width: 100%;
  padding: 1em;
  background: #fff;
  border-radius: .5rem;
`
export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <AddCounter />
        <CounterList />
        <Total />
      </Wrapper>
    )
  }
}
