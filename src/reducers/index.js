import * as types from '../actions/ActionTypes';

const initialState = {
  input: '',
  todos: [
    { id:0, text: '리액트 공부하기', done: true },
    { id:1, text: '컴포넌트 스타일링 해보기', done: false }
  ]
};

let id = initialState.todos.length-1;
const getId = () => ++id;

const reducers = (state = initialState, action) => {
  const { input, todos } = state;


  switch (action.type) {
    case types.CHANGE:
      return {
        input: action.event.target.value,
        todos: todos
      };

    case types.INSERT:
      return {
        input: '',
        todos: [
          ...todos,
          {
            id: getId(),
            text: input,
            done: false
          }
        ]
      };

    case types.TOGGLE:
      return {
        input: input,
        todos: todos.map(todo =>
          (todo.id === action.id)
            ? {
               ...todo,
               done: !todo.done

            }
            : todo
        )
      };

    case types.REMOVE:
      return {
        input: input,
        todos: todos.filter(todo => todo.id !== action.id)
      }

    default:
      return state;
  }
};

export default reducers;