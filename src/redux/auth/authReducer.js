import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from './authTypes'

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
        default: return state
    }
}

export default authReducer