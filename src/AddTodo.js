import React, { Component } from 'react'
import { connect } from 'react-redux'


class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: Math.floor(Math.random() * 1000),
      text: '',
      status: false
    }
  }
  handleSubmit = () => {
    this.props.addTodo(this.state)
    this.setState({ id: Math.floor(Math.random() * 1000), text: '' })
  }
  render () {
    return (
      <div>
        <h3>Todo List</h3>
        <input
          type='text'
          value={this.state.text}
          placeholder='Enter list item'
          onChange={e => {
            this.setState({ text: e.target.value })
          }}
        />

        <button
          onClick={() => {
            this.handleSubmit()
          }}
        >
          Add Todo
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    todoData: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: val => dispatch({ type: 'ADD_TODO', payload: val })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)


