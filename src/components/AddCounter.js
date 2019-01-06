import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/counters'

class AddCounter extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({ title: this.input.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(add(this.state.title))
    this.input.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={node => (this.input = node)}
          onChange={this.handleChange}
        />
        <button type="submit">Add Counter</button>
      </form>
    )
  }
}

export default connect()(AddCounter)
