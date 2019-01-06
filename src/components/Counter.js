import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, remove } from '../actions/counters'

const Counter = ({ id, title, count, dispatch }) => (
  <div>
    {title} || count: {count}
    <button onClick={() => dispatch(decrement(id))}>-</button>
    <button onClick={() => dispatch(increment(id))}>+</button>
    <button onClick={() => dispatch(remove(id))}>DELETE</button>
  </div>
)

export default connect()(Counter)
