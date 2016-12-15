import dispatcher from '../dispatcher.js';
import { ADD_BLOG, LOAD_BLOGS_FROM_SERVER, DELETE_BLOG, EDIT_BLOG, SHOW_EDIT_MODAL } from '../constants/Blogs.js';

class BlogActions {
    addBlog(blogData) {
        dispatcher.dispatch({
            type: ADD_BLOG,
            payload: blogData
        })
    }

    loadBlogsFromServer(count = 3) {
        dispatcher.dispatch({
            type: LOAD_BLOGS_FROM_SERVER,
            payload: count
        })
    }

    showEditBlogForm(blogId) {
        dispatcher.dispatch({
            type: SHOW_EDIT_MODAL,
            payload: blogId
        })
    }

    editBlog(blogData) {
        dispatcher.dispatch({
            type: EDIT_BLOG,
            payload: blogData
        })
    }

    removeBlog(blogId) {
        dispatcher.dispatch({
            type: DELETE_BLOG,
            payload: blogId
        })
    }
}

const blogActions = new BlogActions;
export default blogActions;
