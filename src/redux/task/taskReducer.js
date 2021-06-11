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
    DETAILS_TASK_FAILURE
} from './taskTypes'
import axios from 'axios'

const initialState = {
    loading: false,
    tasks: [],
    error: '',
    details: {}
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASKS_REQUEST: return {
            ...state
        }
        case FETCH_TASKS_SUCCESS: return {
            ...state,
            tasks: action.payload
        }
        case FETCH_TASKS_FAILURE: return {
            ...state
        }
        case ADD_TASK_REQUEST: return {
            ...state,
        }
        case ADD_TASK_SUCCESS: return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
        case ADD_TASK_FAILURE: return {
            ...state,
        }
        case DELETE_TASK_REQUEST: return {
            ...state,
        }
        case DELETE_TASK_SUCCESS: return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload.id)
        }
        case DELETE_TASK_FAILURE: return {
            ...state,
        }
        case DETAILS_TASK_REQUEST: return {
            ...state,
        }
        case DETAILS_TASK_SUCCESS: return {
            ...state,
            details: { ...action.payload }
        }
        case DETAILS_TASK_FAILURE: return {
            ...state,
        }

        default: return state
    }
}

export default tasksReducer