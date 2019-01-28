import { connect } from 'react-redux';
import TodoInput from '../components/TodoInput';
import * as actions from '../actions';

const mapStateToProps = state => ({
  value: state.input
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.change(e)),
  onInsert: () => dispatch(actions.insert())
})

const TodoInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);

export default TodoInputContainer;