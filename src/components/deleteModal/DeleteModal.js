import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import styles from './DeleteModal.module.scss'
import { deleteTask } from '../../redux/task/taskActions'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
Modal.setAppElement('#root')

const DeleteModal = ({ showModal, setShowModal, id, }) => {
    const [fireRedirect, setFireRedirect] = useState(false)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTask(id))
        setShowModal(false)
        setFireRedirect(true)


    }

    return (
        <>

            <Modal className={styles.modal} isOpen={showModal} onRequestClose={() => setShowModal(false)} >
                <h1>Are You sure to delete this task?</h1>
                <button onClick={() => setShowModal(false)}>Close</button>
                <button onClick={handleDelete}>Delete</button>
            </Modal >
            {
                fireRedirect && <Redirect to='/todo' />
            }
        </>



    )
}

export default DeleteModal
