export const SaveSignUp = function (data) {

    if (typeof (data) != 'object') {
        throw 'Parameter is not a object!';

    }

    let users = localStorage.getItem('users')
    users = JSON.parse(users)
    users = (users) ? users : []
    let userExist = users.find(user => user.email === data.email)

    if (userExist) {
        return { message: 'UserExist', error: true }
    } else {
        users.push(data)
        let result = localStorage.setItem('users', JSON.stringify(users));

        return { message: 'User successfully inserted', error: false }
    }

}