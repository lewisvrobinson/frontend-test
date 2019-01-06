import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, remove } from '../actions/counters'
import styled, {css} from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  position: relative;
  padding: .5em;
  background: rgba(0,0,0, .05);
  border-radius: .25rem
  > * {
    height: 100%;
    padding: 0 1em;
  }
`
const Title = styled.div`
  width: 380px;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Count = styled.div`
  font-size: .8rem
`
const Button = styled.button`
  display: inline-block;
  border: 0;
  min-width: 3em;
  padding: inherit;
  -webkit-appearance: none;
  border-radius: .25rem;
  transition: all .25s ease;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2px cornflowerblue;
    cursor: pointer;
    transition: box-shadow .25s ease;
    outline: none;
  }
  ${props => props.delete && css `
    margin-left: auto;
    flex: 0 0 6em;
    &:hover,
    &:focus {
      background: #fff;
      box-shadow: inset 0 0 0 2px red;
      cursor: pointer;
    }
    &:active {
      box-shadow: inset 0 0 0 10em red;
      color: #fff;
      outline: none;
    }
  `}
  ${props => props.up && css `
    &:active {
      transition: all .25s ease;
      transform: translateY(-.25em);
      outline: none;
    }
  `}
  ${props => props.down && css `
    &:active {
      transition: all .25s ease;
      transform: translateY(.25em);
      outline: none;
    }
  `}
`

const Counter = ({ id, title, count, dispatch }) => (
  <Wrapper>
    <Button down onClick={() => dispatch(decrement(id))}>-</Button>
    <Count>{count}</Count>
    <Button up onClick={() => dispatch(increment(id))}>+</Button>
    <Title>{title}</Title>
    <Button onClick={() => dispatch(remove(id))} delete>DELETE</Button>
  </Wrapper>
)

export default connect()(Counter)
