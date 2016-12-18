import React from 'react';
import store from '../stores/store';

import { toggleModalForm } from '../actions/blogsActions';

import { connect } from 'react-redux';

@connect(store => {
    return {
        blogs: store.blogs.blogs,
        showModalFor: store.blogs.showModalFor
    };
})
class Modal extends React.Component {
    constructor(props) {
        super(props);
        
        // здесь будут храниться данные из измененной формы
        this.formEdit = {};

        // значения для "заливки в форму"        
        this.modalBlog = {};        
    }
    
    editBlogFormClick = () => {
        const editBlogFormData = {...this.state};
        Object.keys(this.formEdit).forEach(key => {
            editBlogFormData[key] = this.formEdit[key].value;            
        });

        blogActions.editBlog(editBlogFormData);
    }

    // showModal = (blogId) => {
        
    //     const blogData = blogStore.getBlogs(blogId);
        
    //     this.setState({ ...blogData });

    // }

    handleChange = (evt) => {
        const editBlogFormData = {...this.state};
        Object.keys(this.formEdit).forEach(key => {
            editBlogFormData[key] = this.formEdit[key].value;            
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('recieve', nextProps);
        // если появился флаг то выводим форму
        if( nextProps.showModalFor ) { 
            console.log('recieved');
            this.modalBlog = nextProps.blogs.filter( item => item.id === nextProps.showModalFor )[0];
            
            Object.keys(this.formEdit).forEach(key => {
                this.formEdit[key].value = this.modalBlog[key] || "";            
            });

            //убираем флаг что надо открыть модальную форму
            this.props.dispatch(toggleModalForm());
        }
    }
    componentWillUpdate() {
        console.log('update',this.props);
        
    }

    render() {       

        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Modal title - BlogId: {this.modalBlog.id}</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal">

                            <div className="form-group">
                                <label htmlFor="inputTitle" className="col-sm-2 control-label">Заголовок статьи</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputTitle" ref={(input) => this.formEdit.title = input} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAuthorId" className="col-sm-2 control-label">ID автора статьи</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref={(input) => this.formEdit.userId = input} id="inputAuthorId" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputBody" className="col-sm-2 control-label">Основное сообщение</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" onChange={()=>true} ref={(input) => this.formEdit.body = input} rows="5" id="inputBody" ></textarea>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.editBlogFormClick}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div> );
    }

}



export default Modal;