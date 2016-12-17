import React from 'react';
import blogStore from '../stores/BlogStore.js';
import blogActions from '../actions/BlogActions.js';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {id: 1 , title: 'Нет', body:'Нет', userId:1};

        // здесь будут храниться данные из измененной формы
        this.formEdit = {};
    }
    
    editBlogFormClick = () => {
        const editBlogFormData = {...this.state};
        Object.keys(this.formEdit).forEach(key => {
            editBlogFormData[key] = this.formEdit[key].value;            
        });

        blogActions.editBlog(editBlogFormData);
    }

    showModal = (blogId) => {
        
        const blogData = blogStore.getBlogs(blogId);
        
        this.setState({ ...blogData });

        // вопрос к преподавателю: не перерендивается Modal
        // console.log(blogData);
        // $('#myModal').modal({});
    }

    componentDidMount() {  
        // подписываемся на событие
        blogStore.addListener( 'showEditForm', this.showModal );
    }

    componentWillUnmount() {  
        // отписываемся от события
        blogStore.removeListener( 'showEditForm', this.showModal );
    }

    handleChange = (evt) => {
        const editBlogFormData = {...this.state};
        Object.keys(this.formEdit).forEach(key => {
            editBlogFormData[key] = this.formEdit[key].value;            
        });
        // this.setState({
        //     ...editBlogFormData
        // });
    }

    render() {
        
        const new
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal">

                            <div className="form-group">
                                <label htmlFor="inputTitle" className="col-sm-2 control-label">Заголовок статьи</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputTitle" ref={(input) => this.formEdit.title = input} onChange = { this.handleChange} value={this.state.title} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAuthorId" className="col-sm-2 control-label">ID автора статьи</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref={(input) => this.formEdit.authorId = input} id="inputAuthorId" onChange = { this.handleChange} value={this.state.userId} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputBody" className="col-sm-2 control-label">Основное сообщение</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" ref={(input) => this.formEdit.body = input} rows="3" id="inputBody" onChange = { this.handleChange} value={this.state.body} ></textarea>
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

    static propTypes = {

    }
}



export default Modal;