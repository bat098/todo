import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE,
    DETAILS_TASK_REQUEST,
    DETAILS_TASK_SUCCESS,
    DETAILS_TASK_FAILURE,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAILURE
} from './taskTypes'

const initialState = {
    loading: false,
    tasks: [],
    error: '',
    details: {}
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASKS_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_TASKS_SUCCESS: return {
            ...state,
            loading: false,
            tasks: action.payload,
        }
        case FETCH_TASKS_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }
        case ADD_TASK_REQUEST: return {
            ...state,
            loading: true,
        }
        case ADD_TASK_SUCCESS: return {
            ...state,
            loading: false,
            tasks: [...state.tasks, action.payload]
        }
        case ADD_TASK_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }
        case DELETE_TASK_REQUEST: return {
            ...state,
            loading: true
        }
        case DELETE_TASK_SUCCESS: return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload.id)
        }
        case DELETE_TASK_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }
        case DETAILS_TASK_REQUEST: return {
            ...state,
            loading: true
        }
        case DETAILS_TASK_SUCCESS: return {
            ...state,
            loading: false,
            details: { ...action.payload }
        }
        case DETAILS_TASK_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }
        case EDIT_TASK_REQUEST: return {
            ...state,
            loading: true,
        }
        case EDIT_TASK_SUCCESS: return {
            ...state,
            loading: false,
            tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
            details: { ...action.payload }
        }
        case EDIT_TASK_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export default tasksReducer