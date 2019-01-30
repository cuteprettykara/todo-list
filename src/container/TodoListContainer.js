import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import * as todosActions from '../modules/todos';
import { bindActionCreators } from 'redux';

class TodoListContainer extends Component {
  handleToggle = id => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  }

  handleRemove = id => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  }

  render() {
    const { todos } = this.props;
    const { handleToggle, handleRemove} = this;

    return (
      <div>
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoListContainer);