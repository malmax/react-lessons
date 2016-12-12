class CommentService {

    static getAllComments() {
        return CommentService.createRequestHelper();
    }

    static getCommentsByBlogId(blogId = 1) {
        return CommentService.createRequestHelper(blogId);
    }

    static getCommentsByUserId(userId = 1) {
        // в jsonplaceholder.typicode.com нет связи между комментов и пользователем поэтому будем выдавть комменты к рандломному блогу
        return CommentService.createRequestHelper(parseInt(100 * Math.random()));
    }
    static createRequestHelper(blogId) {

        let srcStr="";
        if(blogId)
             srcStr = `?postId=${blogId}`;            
            
        return (new Promise((resolve, reject) => {
                    $.ajax({
                        url: `https://jsonplaceholder.typicode.com/comments${srcStr}`,
                        method: 'GET',
                        success: (response) => {
                            resolve(response);
                        },
                        error: (err) => {
                            reject(err);
                        }
                    });
            }));
    }
}

export default CommentService;