import { createAction, handleActions } from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialState = {
  input: ''
};

export default handleActions({
  [SET_INPUT]: (state, action) => {
    const { payload: value } = action;
    return {input: value};
  }
}, initialState);