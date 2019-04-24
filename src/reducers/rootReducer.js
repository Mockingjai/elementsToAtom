import { combineReducers } from 'redux';
import protonReducer from './protonReducer';
import electronReducer from './electronReducer';
import neutronReducer from './neutronReducer';
import transformReducer from './transfromReducer';
const rootReducer = combineReducers({
    protonReducer: protonReducer,
    neutronReducer: neutronReducer,
    electronReducer: electronReducer,
    transformReducer: transformReducer,
});
export default rootReducer;