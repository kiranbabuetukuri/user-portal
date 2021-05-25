const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
const setUserLoginSuccess = () => {
    return {
        type: USER_LOGIN_SUCCESS
    }
}
const setUserLoginFail = () => {
    return {
        type: USER_LOGIN_FAIL
    }
}

const initialState = {
    is_logged_in: false
}
export const userLoggedInReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { is_logged_in: true }

        case USER_LOGIN_FAIL:
            return { is_logged_in: false }


        default:
            return initialState;

    }
}

export const fetchUserLoggedIn = (data) => {
    return (dispatch) => {

        let users = localStorage.getItem('users')
        users = JSON.parse(users)
        users = (users) ? users : []
        const userExist = users.find(user => user.email === data.email && user.password === data.password)

        userExist ? dispatch(setUserLoginSuccess()) : dispatch(setUserLoginFail())


    }

}