class CommentService {

    static getAllComments() {
        return BlogService.createRequestHelper();
    }

    static getCommentsByBlogId(blogId = 1) {
        return BlogService.createRequestHelper(blogId);
    }

    static createRequestHelper(blogId) {

        let srcStr;
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

export default BlogService;