import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
        return (
        <li className="TodoItem">
        <strong>{this.props.todos.title}</strong>
        </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object,
}
  

export default TodoItem;
