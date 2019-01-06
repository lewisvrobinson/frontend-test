import React from 'react'
import Counter from './Counter'
import { connect } from 'react-redux'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1em 0;
`
const CounterList = ({ counters }) => (
  <List>
    {counters
      ? counters.map(counter => (
          <li key={counter.id}>
            <Counter
              id={counter.id}
              title={counter.title}
              count={counter.count}
            />
          </li>
        ))
      : false}
  </List>
)

const mapStateToProps = state => ({
  counters: state.counters.items,
  loading: state.counters.loading,
  error: state.counters.error
})

export default connect(mapStateToProps)(CounterList)
