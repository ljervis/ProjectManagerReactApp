import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todos => {
        return (
          <TodoItem key = {todos.title} todos = {todos}/>
        )
      });
    }
    return (
      <div className="Todos">
      <h3>Todo List</h3>
      {todoItems}
      </div>
    );
  }
}


Todos.propTypes = {
  projects: PropTypes.array
}

export default Todos;
