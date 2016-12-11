class UserService {

    static getAllUsers() {
        return UserService.createRequestHelper();
    }

    static getUserById(userId = 1) {
        return UserService.createRequestHelper(userId);
    }

    static createRequestHelper(userId) {

        let srcStr="";
        if(userId)
             srcStr = `?id=${userId}`;            
            
        return (new Promise((resolve, reject) => {
                    $.ajax({
                        url: `https://jsonplaceholder.typicode.com/users${srcStr}`,
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

export default UserService;