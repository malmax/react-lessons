class BlogService {
    // constructor(props) {

    //     this.blogCount = props.count || 10;
    // }

    static getBlogs(count = 10) {

        var arr = [];
        const maxPost = 100;
        let existBlogId = [];
        for (let i = 0; i < count; i++) {
            // создаем рандомно номер статьи для получения
            let blogId = parseInt(maxPost * Math.random());
            // проверяем был ли такой айди раньше
            while (~arr.indexOf(blogId)) 
                blogId = parseInt(maxPost * Math.random());
            
            // добавляем в список уже запрошенных айди
            existBlogId.push(blogId);

            // создаем запросы к удаленному серверу
            arr.push(BlogService.createRequestHelper(blogId));
        }

        // arr.all().then(data =>     this.data = data );

        return (arr); // return Promises
    }

    static getBlogById(blogId = 1) {
        return BlogService.createRequestHelper(blogId);
    }

    static createRequestHelper(blogId = 1) {

        if(!blogId)
            blogId = 1;
            
        return (new Promise((resolve, reject) => {
                    $.ajax({
                        url: `https://jsonplaceholder.typicode.com/posts/${blogId}`,
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