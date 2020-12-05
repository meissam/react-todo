import {combineReducers} from 'redux';
import notesReducer from './notes';
import filterTagsReducer from './filterTags';


export default combineReducers({
    notes: notesReducer,
    filterTags: filterTagsReducer,
})