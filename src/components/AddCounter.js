import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/counters'
import styled, { css } from 'styled-components'

const Form = styled.form`
  display: flex;
  align-items: center;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  padding: 0.5rem;
  > * {
    height: 100%;
    padding: 0.5em;
  }
`
const Input = styled.input`
  flex: 1;
  display: block;
  font-size: 1em;
  -webkit-appearance: none;
  border: 0;
  border-radius: 0.25rem;
  margin-right: 1rem;
  box-shadow: none;
  &:focus {
    box-shadow: inset 0 0 0 2px cornflowerblue;
    transition: box-shadow 0.25s ease;
    outline: none;
  }
  ::-webkit-input-placeholder {
    font-style: italic;
  }
  :-moz-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }
`
const Button = styled.button`
  flex: 0 0 6em;
  display: inline-block;
  border: 0;
  min-width: 3em;
  padding: 0.8rem;
  -webkit-appearance: none;
  border-radius: 0.25rem;
  transition: all 0.25s ease;
  ${props =>
    !props.disabled &&
    css`
      background: #03a87c;
      color: #fff;
      &:hover,
      &:focus {
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.5);
        cursor: pointer;
        outline: none;
      }
    `}
  ${props =>
    props.disabled &&
    css`
      background: rgba(0, 0, 0, 0.05);;
      box-shadow: inset 0 0 0 0px transparent
    &:hover {
        cursor: not-allowed;
      }
    `}
`

class AddCounter extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      disabled: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({
      title: this.input.value,
      disabled: this.input.value.length > 2 ? false : true
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.disabled) {
      this.props.dispatch(add(this.state.title))
      this.input.value = ''
      this.setState({ title: '', disabled: true })
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Name your awesome counter..."
          ref={node => (this.input = node)}
          onChange={this.handleChange}
        />
        <Button type="submit" disabled={this.state.disabled}>
          ADD
        </Button>
      </Form>
    )
  }
}

export default connect()(AddCounter)
