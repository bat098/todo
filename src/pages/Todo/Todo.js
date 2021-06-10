import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Todo = () => {
    const token = useSelector(state => state.auth.data.jwt)
    const apiUrl = 'http://139.59.215.177/todos'

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    useEffect(() => {
        authAxios.get()
            .then(res => console.log(res.data))
            .catch(err => err.data)
    }, [])
    return (
        <div>
            todo
        </div>
    )
}

export default Todo
