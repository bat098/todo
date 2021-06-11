import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'



const TodoItemsDetails = () => {
    const [itemDetails, setItemDetails] = useState({})
    const { id, title, description, finished } = itemDetails
    const param = useParams()
    const token = useSelector(state => state.auth.data.jwt)
    const apiUrl = 'http://139.59.215.177/todos'
    const authAxios = axios.create({
        baseURL: `${apiUrl}/${param.id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    useEffect(() => {
        authAxios.get()
            .then(res => setItemDetails(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>

            <div>{id}</div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{finished ? 'true' : false}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default TodoItemsDetails
