import * as constants from '../constants/Blogs';

export default function blogsReducer(state = { blogs: [], isLoading: false, isLoaded: false, error: '', showModalFor: null }, action) {
    switch(action.type) {
        case constants.ADD_BLOG: {
            let blogs = state.blogs.slice(0);
            // создаем рандомный айди
            action.payload.id = parseInt(Math.random() * 1000 + 100);
            blogs.push(action.payload);

            state = {...state, blogs };
            break;
        }

        case constants.DELETE_BLOG: {
            let blogs = state.blogs.slice(0).filter(blog => blog.id !== action.payload);

            state = {...state, blogs };
            break;
        }

        case constants.EDIT_BLOG: {            
            let blogs = state.blogs.slice(0).map(blog => {
                if(blog.id === action.payload.id) 
                    return action.payload;
                else
                    return blog;
                });

            state = {...state, blogs };
            break;
        }
        case constants.TOGGLE_EDIT_MODAL: {
            state = { ...state, showModalFor: action.payload }
            break;
        }
        
        case constants.LOAD_BLOGS_START: {
            state = { ...state, isLoading: true };
            break;
        }
        case constants.LOAD_BLOGS_END: {
            state = { ...state, isLoading: false };
            break;
        }
        case constants.LOAD_BLOGS_SUCCESS: {
            // если блогов нет
            if(! state.isLoaded) {
                const loadedBlogs = action.payload; //.filter(item => parseInt(Math.random()*20) == 2);
                state = { ...state, blogs: loadedBlogs, isLoaded: true };
            }
            break;
        }
        case constants.LOAD_BLOGS_FAILURE: { 
            state = { ...state, error: action.payload, isLoaded: false };
            break;
        }
    }

    return state;
}