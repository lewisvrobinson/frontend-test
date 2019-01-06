import React, { Component } from 'react'
import { fetchCounters } from '../actions/counters'
import { connect } from 'react-redux'

class AddCounter extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addCounter(title) {
    fetch('/api/counter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: title
    }).then(this.props.dispatch(fetchCounters()))
  }

  handleChange() {
    this.setState({ title: this.input.value })
  }

  handleSubmit(event) {
    const title = JSON.stringify({ title: this.state.title })
    event.preventDefault()
    this.addCounter(title)
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
