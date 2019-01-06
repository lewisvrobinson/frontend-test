import React from 'react'
import Counter from './Counter'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 2rem;
  > * {
    height: 100%;
    padding: 0.5em;
  }
`

const Number = styled.div`
  margin-left: auto;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  flex: 0 0 4rem;
  text-align: center;
`

const showTotal = counters => {
  let totalCount = 0
  counters.forEach(counter => {
    totalCount = totalCount + counter.count
  })
  console.log(counters.length)
  return totalCount
}
const Total = ({ counters = [] }) => (
  <div>
    {counters.length > 0 ? (
      <Wrapper>
        <span>Total</span>
        <Number>{showTotal(counters)}</Number>
      </Wrapper>
    ) : (
      false
    )}
  </div>
)

const mapStateToProps = state => ({
  counters: state.counters.items,
  loading: state.counters.loading,
  error: state.counters.error
})

export default connect(mapStateToProps)(Total)
