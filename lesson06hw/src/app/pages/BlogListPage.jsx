import React from 'react';
import BlogInList from "../components/BlogInList.jsx";
import BlogService from '../services/BlogService.js';
import Modal from '../components/Modal.jsx';

import blogActions from '../actions/BlogActions.js';
import blogStore from '../stores/BlogStore.js';

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }

export default class BlogListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'messages': []
        };

        if(this.props.userId) {
            BlogService.getBlogsByUserId().then(data => this.setState({'loaded': true, 'messages': data}));
        }
        
        
        // Здесь будут хранитсья ссылки на инпуты формы
        this.formAdd = {};
    }

    componentDidMount() {  
        // подписываемся на событие
        blogStore.addListener( 'changeBlogList', this.changeBlogList );

    }

    componentWillUnmount() {  
        // отписываемся от события
        blogStore.removeListener( 'changeBlogList', this.changeBlogList );
    }

    // Вызывается при обновлении списка блогов в сторе
    changeBlogList = () => {
        this.setState({
            messages: blogStore.getBlogs()
        })
    }

    addBlogFormClick = () => {
        // Собираем данные для создания блога
        const addBlogFormData = {};
        Object.keys(this.formAdd).forEach(key => {
            addBlogFormData[key] = this.formAdd[key].value;
            this.formAdd[key].value = "";
        });
        // Вызываем action addBlog
        blogActions.addBlog(addBlogFormData);
    }


    render() {

        return (
            <div>
                    {this.state.messages.length
                        ? this.props.children || this
                            .state
                            .messages
                            .map((item, i) => <BlogInList key={`blog${i}`} {...item} />)
                        : <span>Loading data...</span>
                    }

                    <form className="form-horizontal">

                        <div className="form-group">
                            <label htmlFor="inputTitle" className="col-sm-2 control-label">Заголовок статьи</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputTitle" ref={(input) => this.formAdd.title = input} placeholder="Заголовок" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAuthorId" className="col-sm-2 control-label">ID автора статьи</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" ref={(input) => this.formAdd.authorId = input} id="inputAuthorId" defaultValue="1" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputBody" className="col-sm-2 control-label">Основное сообщение</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" ref={(input) => this.formAdd.body = input} rows="3" id="inputBody"></textarea>
                            </div>
                        </div>
                        
                        <button type="button" className="btn btn-success" onClick={this.addBlogFormClick}>Создать блог</button>
                    </form>

                    <Modal />
            </div>
        );
    }
}
