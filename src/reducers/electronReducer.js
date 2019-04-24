import * as constants from '../actions/const';
const initialState = {
    E: 0,
};

const electronReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_ELECTRON:
            return {
                ...state,
                E: action.createElectron,
            };
        default:
            return state;
    }
};
export default electronReducer;