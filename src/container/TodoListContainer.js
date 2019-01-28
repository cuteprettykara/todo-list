import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import * as actions from '../actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(actions.toggle(id)),
  onRemove: id => dispatch(actions.remove(id))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;