import {UPDATE_FIRST, UPDATE_SECOND, UPDATE_THIRD} from '../actions/action-types';

export interface IState {
  base: string | null;
  rates: {
    [elem: string]: number
  }
}

export interface IInitialState {
  first: IState,
  second: IState,
  third: IState,
}

interface IAction {
  type: string;
  payload: IState;
}

const initialState: IInitialState = {
  first: {
    base: null,
    rates: {}
  },
  second: {
    base: null,
    rates: {}
  },
  third: {
    base: null,
    rates: {}
  },
};

const ratesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case UPDATE_FIRST:
      return Object.assign({}, state, {first: action.payload});
    case UPDATE_SECOND:
      return Object.assign({}, state, {second: action.payload});
    case UPDATE_THIRD:
      return Object.assign({}, state, {third: action.payload});
    
    default:
      return state;
  }
};

export default ratesReducer;
