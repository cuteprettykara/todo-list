const SET_INPUT = 'SET_INPUT';

export const setInput = value => ({
  type: SET_INPUT,
  value
});

const initialState = {
  input: ''
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        input: action.value
      };

    default:
      return state;
  }
};

export default inputReducer;