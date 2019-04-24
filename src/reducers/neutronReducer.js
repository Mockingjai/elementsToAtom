import * as constants from '../actions/const';
const initialState = {
    N: 0,
};

const neutronReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_NEITRON:
            return {
                ...state,
                N: action.createNeutron,
            };
        default:
            return state;
    }
};
export default neutronReducer;