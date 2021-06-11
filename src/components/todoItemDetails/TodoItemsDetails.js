import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { detailsTask } from '../../redux/task/taskActions'
import DeleteModal from '../deleteModal/DeleteModal'
import Modal from 'react-modal'
import styles from './modal.module.scss'



const TodoItemsDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const itemDetails = useSelector(state => state.tasks.details)

    const { id, title, description, finished } = itemDetails
    const param = useParams()


    useEffect(() => {
        dispatch(detailsTask(param.id))
    }, [])

    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{finished ? 'true' : false}</div>
            <button>Edit</button>
            <button onClick={() => setShowModal(true)}>Delete</button>

            <DeleteModal showModal={showModal} setShowModal={setShowModal} id={param.id} />


        </div>
    )
}

export default TodoItemsDetails
