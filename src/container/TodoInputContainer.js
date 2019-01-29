import { connect } from 'react-redux';
import TodoInput from '../components/TodoInput';
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

let id = 1;
const getId = () => ++id;

const mapStateToProps = state => ({
  value: state.inputReducer.input
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(inputActions.setInput(e.target.value)),
  onInsert: input => {
    dispatch(todosActions.insert({
      id: getId(),
      text: input,
      done: false
    }));
    dispatch(inputActions.setInput(''));
  }
});

const mergeProps = (state, dispatch) => {
  return {
    ...state,
    ...dispatch,
    onInsert: () => dispatch.onInsert(state.value)
  };
};

const TodoInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoInput);

export default TodoInputContainer;