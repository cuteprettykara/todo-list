import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const SET_INPUT = 'input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialState = Map({
  value: ''
});

export default handleActions({
  [SET_INPUT]: (state, action) => state.set('value', action.payload)
}, initialState);