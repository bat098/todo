import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE } from './taskTypes'
import axios from 'axios'
import store from '../store'


export const fetchTasksRequest = () => {
    return {
        type: FETCH_TASKS_REQUEST
    }
}

export const fetchTasksSuccess = (tasks) => {
    return {
        type: FETCH_TASKS_SUCCESS,
        payload: tasks
    }
}

export const fetchTasksFailure = () => {
    return {
        type: FETCH_TASKS_FAILURE
    }
}
//#######################################
export const addTaskRequest = () => {
    return {
        type: ADD_TASK_REQUEST,
    }
}

export const addTaskSuccess = (task) => {
    return {
        type: ADD_TASK_SUCCESS,
        payload: task
    }
}

export const addTaskFailure = (error) => {
    return {
        type: ADD_TASK_FAILURE,
        payload: error
    }
}
//#######################################
export const deleteTaskRequest = () => {
    return {
        type: DELETE_TASK_REQUEST,
    }
}

export const deleteTaskSuccess = (id) => {
    return {
        type: DELETE_TASK_SUCCESS,
        payload: id
    }
}

export const deleteTaskFailure = (error) => {
    return {
        type: DELETE_TASK_FAILURE,
        payload: error
    }
}



const apiUrl = 'http://139.59.215.177/todos'

const takeToken = () => {
    return store.getState().auth.data.jwt
}



export const fetchTasks = () => {
    return (dispatch) => {
        const token = takeToken()
        dispatch(fetchTasksRequest())
        axios.get(apiUrl, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => dispatch(fetchTasksSuccess(res.data)))
            .catch(err => console.log(err.data))
    }
}


export const addTask = (task) => {
    return (dispatch) => {
        dispatch(addTaskRequest())
        const token = takeToken()
        axios.post(apiUrl, task, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                dispatch(addTaskSuccess(task))
                dispatch(fetchTasks())
            })
            .catch(err => console.log(err.data))
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        dispatch(deleteTaskRequest())
        const token = takeToken()
        axios.delete(`${apiUrl}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                // dispatch(deleteTaskSuccess(id))
                dispatch(fetchTasks())
            })
            .catch(err => console.log(err.data))
    }
}


