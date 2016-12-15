import actions from '../constants/users';

export default function usersReducer(state, action) {
    switch(action.type) {

        case actions.CREATE_USER: {
            let users = state.users.slice(0);
            users.push(action.payload);

            state = { ...state, users }
        }
        
    }

    return state;
}