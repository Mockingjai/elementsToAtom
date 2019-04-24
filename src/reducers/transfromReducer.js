import * as constants from '../actions/const';
const initialState = {
  A: 0,
};

const transformReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TRANSFORM:
      return {
        ...state,
        A: state.A + 1
      };
    default:
      return state;
  }
};

export default transformReducer;
