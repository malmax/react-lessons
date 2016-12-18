import * as constants from '../constants/Users';

export default function usersReducer(state = { users: [], isLoading: false, isLoaded: false, error: '' }, action) {
    switch(action.type) {
        
        case constants.LOAD_USERS_START: {
            state = { ...state, isLoading: true };
            break;
        }
        case constants.LOAD_USERS_END: {
            state = { ...state, isLoading: false };
            break;
        }
        case constants.LOAD_USERS_SUCCESS: {
            // если пользователей нет
            if(! state.isLoaded) {            
                const loadedUsers = action.payload;
                state = { ...state, users: loadedUsers, isLoaded: true };
            }
            break;
        }
        case constants.LOAD_USERS_FAILURE: { 
            state = { ...state, error: action.payload, isLoaded: false };
            console.error(action.payload);
            break;
        }
    }

    return state;
}