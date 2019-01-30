import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from '../components/TodoInput';
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';
import { bindActionCreators } from 'redux';

class TodoInputContainer extends Component {
  id = 1
  getId = () => ++this.id;

  handleChange = e => {
    const { InputActions } = this.props;
    InputActions.setInput(e.target.value);
  }

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props;

    TodosActions.insert({
      id: this.getId(),
      text: value,
      done: false
    });

    InputActions.setInput('');
  }

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;

    return (
      <div>
        <TodoInput
          value={value}
          onChange={handleChange}
          onInsert={handleInsert}
        />
      </div>
    );
  }
}

/* 이번에는 mapStateToProps와 mapDispatchToProps 함수에 대한 레퍼런스를
따로 만들지 않고, 그 내부에 바로 정의해주었습니다.*/
export default connect(
  state => ({value: state.input.value}),
  dispatch => ({
    /* bindActionCreators를 사용하면 다음 작업들을 자동으로 해줍니다:
      {
          actionCreator: (...params) => dispatch(actionCreator(...params))
      }

      그래서 이전에 우리가 했었던 것처럼 하나하나 dispatch할 필요가 없습니다.
      예를 들면 InputActions의 경우 다음과 같은 작업이 되어 있는 것이죠.

      InputActions: {
        setInput: (value) => dispatch(inputActions.setInput(value))
      }

      나중에 이를 호출할 때는 this.props.InputActions.setInput을 호출하면 됩니다.
    */
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoInputContainer);