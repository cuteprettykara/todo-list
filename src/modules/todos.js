import { createAction, handleActions } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = [
  { id:0, text: '리액트 공부하기', done: true },
  { id:1, text: '컴포넌트 스타일링 해보기', done: false }
];

export default handleActions({
  [INSERT]: (state, action) => {
    /* payload 안에 있는 id, text, done에 대한 레퍼런스를 만들어줍니다.
    레퍼런스를 만들지 않고, 바로 push(Map(action.payload))를 해도 되지만,
    나중에 이 코드를 보게 됐을 때, 
    이 액션이 어떤 데이터를 처리하는지 쉽게 보기 위해서 하는 작업입니다. */
    const { id, text, done } = action.payload;

    return [
      ...state,
      {
        id: id,
        text: text,
        done: done
      }
    ];
  },

  [TOGGLE]: (state, action) => {
    const { payload: id } = action;
    // = const id = action.payload;
    /* 비구조화 할당을 통하여 id라는 레퍼런스에 action.payload란 값을 넣습니다.
    이 작업이 필수는 아니지만, 나중에 이 코드를 보게 되었을 때 여기서의 payload가
    어떤 값을 의미하는지 이해하기 쉬워집니다. */

    return state.map(todo =>
        (todo.id === id)
          ? {
             ...todo,
             done: !todo.done

          }
          : todo
      );
  },

  [REMOVE]: (state, action) => {
    const { payload: id } = action;

    return state.filter(todo => todo.id !== id);
  }
}, initialState);