import * as constants from '../actions/const';
const initialState = {
    P: 0,
};

const protonReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_PROTON:
            return {
                ...state,
                P: action.createProton,
            };
        default:
            return state;
    }
};
export default protonReducer;