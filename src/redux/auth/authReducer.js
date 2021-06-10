import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, LOGOUT } from './authTypes'

const initialState = {
    isLogged: false,
    loading: false,
    data: [],
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_LOGIN_SUCCESS: return {
            ...state,
            isLogged: true,
            loading: false,
            data: action.payload,
            error: ''
        }
        case FETCH_LOGIN_FAILURE: return {
            ...state,
            loading: false,
            data: [],
            error: action.payload
        }
        case LOGOUT: return {
            ...state,
            isLogged: false,
            loading: false,
            data: [],
            error: ''
        }
        default: return state
    }
}

export default authReducer