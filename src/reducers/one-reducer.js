import * as constants from '../actions/const';

const initialState = {
  P: 0,
  N: 0,
  E: 0,
  A: 0
};

const createAtom = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_PROTON:
      return {
        ...state,
        P: action.createProton,
      };
    case constants.ADD_NEITRON:
      return {
        ...state,
        N: action.createNeutron,
      };
    case constants.ADD_ELECTRON:
      return {
        ...state,
        E: action.createElectron,
      };
    case constants.TRANSFORM:
      return {
        ...state,
        P: state.P - 2,
        N: state.N - 2,
        E: state.E - 2,
        A: state.A + 1
      };
    default:
      return state;
  }
};

export default createAtom;
