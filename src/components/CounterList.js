import React from 'react'
import Counter from './Counter'
import { connect } from 'react-redux'

const CounterList = ({ counters }) => (
  <ul>
    {counters
      ? counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            title={counter.title}
            count={counter.count}
          />
        ))
      : false}
  </ul>
)

const mapStateToProps = state => ({
  counters: state.counters.items,
  loading: state.counters.loading,
  error: state.counters.error
})

export default connect(mapStateToProps)(CounterList)
