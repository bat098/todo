import axios from 'axios'
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from './authTypes'

export const fetchLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST
    }
}

export const fetchLoginSuccess = (user) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: user
    }
}

export const fetchLoginFailure = (error) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}

export const fetchLogin = () => {
    return (dispatch) => {
        dispatch(fetchLoginRequest())
        axios.post('http://139.59.215.177/auth/local', {
            identifier: "mateusz@mail.pl",
            password: "qwe123qwe"
        })
            .then(response => {
                const data = response.data
                dispatch(fetchLoginSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.response.data.message[0].messages[0].message
                dispatch(fetchLoginFailure(errorMsg))
            })
    }
}



