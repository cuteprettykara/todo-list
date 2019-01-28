import * as types from './ActionTypes';

export const change = e => ({
  type: types.CHANGE,
  event: e
});

export const insert = () => ({
  type: types.INSERT
});

export const toggle = id => ({
  type: types.TOGGLE,
  id
});

export const remove = id => ({
  type: types.REMOVE,
  id
});