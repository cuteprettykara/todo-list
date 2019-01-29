const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = (todo) => ({
  type: INSERT,
  todo
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

const initialState = {
  todos: [
    { id:0, text: '리액트 공부하기', done: true },
    { id:1, text: '컴포넌트 스타일링 해보기', done: false }
  ]
};

const todosReducer = (state = initialState, action) => {
  const { todos } = state;

  switch (action.type) {
    case INSERT:
      return {
        todos: [
          ...todos,
          action.todo
        ]
      };

    case TOGGLE:
      return {
        todos: todos.map(todo =>
          (todo.id === action.id)
            ? {
               ...todo,
               done: !todo.done

            }
            : todo
        )
      };

    case REMOVE:
      return {
        todos: todos.filter(todo => todo.id !== action.id)
      }

    default:
      return state;
  }
};

export default todosReducer;