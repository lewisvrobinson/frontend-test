import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ counterName: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const empty = this.state.counterName.length === 0;
    const data = {title: this.state.counterName};
    console.log(empty);
    if (!empty)
      fetch('/api/counter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Counter name"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
