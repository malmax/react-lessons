import * as constants from '../constants/Comments';

export default function commentsReducer(state = { comments: [], isLoading: false, isLoaded: false, isAllLoaded: false, error: '' }, action) {
    switch(action.type) {
        
        case constants.LOAD_COMMENTS_START: {
            state = { ...state, isLoading: true };
            break;
        }
        case constants.LOAD_COMMENTS_END: {
            state = { ...state, isLoading: false };
            break;
        }
        case constants.LOAD_COMMENTS_SUCCESS: {
                const loadedComments = action.payload;
                state = { ...state, comments: loadedComments, isLoaded: true };
            break;
        }
        case constants.LOAD_COMMENTS_FAILURE: { 
            state = { ...state, error: action.payload, isLoaded: false };
            break;
        }

        case constants.LOAD_ALL_COMMENTS_START: {
            state = { ...state, isLoading: true };
            break;
        }
        case constants.LOAD_ALL_COMMENTS_END: {
            state = { ...state, isLoading: false };
            break;
        }
        case constants.LOAD_ALL_COMMENTS_SUCCESS: {
            if(! state.isAllLoaded) {
                const loadedComments = action.payload;
                state = { ...state, comments: loadedComments, isAllLoaded: true };
            }
            break;
        }
        case constants.LOAD_ALL_COMMENTS_FAILURE: { 
            state = { ...state, error: action.payload, isAllLoaded: false };
            break;
        }
    }

    return state;
}