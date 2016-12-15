import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.js';
import { ADD_BLOG, LOAD_BLOGS_FROM_SERVER, DELETE_BLOG, EDIT_BLOG, SHOW_EDIT_MODAL } from '../constants/Blogs.js';
import BlogService from '../services/BlogService.js';

class BlogStore extends EventEmitter {
    constructor(props) {
        super(props);
        
        this.blogs = [];
        
    }

    addBlog({id = parseInt(Math.random()*100) , title = "пустой заголовок", body, userId = 1}) {        
        this.blogs.push({id , title, body, userId});
        this.emit('changeBlogList');
    }

    getBlogs(blogId = 0) {
        if(blogId) 
            return this.blogs.filter(blog => blog.id === blogId)[0];        
        else
            return this.blogs;
    }



    editBlog(blogData) {
        this.blogs = this.blogs.map(blog => {
            if(blog.id == blogData.id) 
                blog = blogData;
            return blog;
        });   
        this.emit('changeBlogList');
    }

    deleteBlog(blogId) {
        this.blogs = this.blogs.filter(blog => blog.id !== blogId);   
        this.emit('changeBlogList');
    }

    handleActions = (action) => {
        switch(action.type) {
            case ADD_BLOG:                
                this.addBlog(action.payload);
            break;

            case LOAD_BLOGS_FROM_SERVER:   
                // только если нет сообщений
                // вызывается каждый раз при открытии страницы с блогами

                // вопрос к преподавателю: правильно ли здесь размещать первоначальное обращение к сервису?
                if(this.blogs.length) {
                    this.emit('changeBlogList');
                    break;
                }
                    
                // загружаем блоги из сервиса
                Promise.all(BlogService.getBlogs()).then((data) => {
                    data.forEach(blog => 
                        this.addBlog(blog)
                    );
                });  
            break;

            case EDIT_BLOG:
                this.editBlog(action.payload);
            break;

            case DELETE_BLOG:
                this.deleteBlog(action.payload);
            break;

            case SHOW_EDIT_MODAL:
                this.emit('showEditForm',action.payload);
            break;

        }

        return true;
    }
    
}

const blogStore = new BlogStore;
dispatcher.register(blogStore.handleActions);

export default blogStore;