import * as constants from '../constants/Blogs';

export default function blogsReducer(state = { blogs: [], isLoading: false, isLoaded: false, error: null }, action) {
    switch(action.type) {
        case constants.ADD_BLOG: 
            let blogs = state.blogs.slice(0);
            blogs.push(action.payload);

            state = {...state, blogs };
            break;

        case constants.LOAD_BLOGS_START: 
            state = { ...state, isLoading: true };
            break;
        
        case constants.LOAD_BLOGS_END: 
            state = { ...state, isLoading: false };
            break;
        
        case constants.LOAD_BLOGS_SUCCESS: 
            const loadedBlogs = action.payload.filter(item => parseInt(Math.random()*20) == 2);
            state = { ...state, blogs: loadedBlogs, isLoaded: true };
            break;
        
        case constants.LOAD_BLOGS_FAILURE: 
            state = { ...state, error: action.payload, isLoaded: false };
            break;
        
    }

    return state;
}