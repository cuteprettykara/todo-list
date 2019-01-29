import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import * as todosActions from '../modules/todos';

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(todosActions.toggle(id)),
  onRemove: id => dispatch(todosActions.remove(id))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;