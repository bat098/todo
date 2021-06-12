import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from './DeleteModal.module.scss'
import { deleteTask } from '../../redux/task/taskActions'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

Modal.setAppElement('#root')

const DeleteModal = ({ showModal, setShowModal, id, }) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTask(id))
        setShowModal(false)
    }

    return (
        <>
            <Modal className={styles.modal} isOpen={showModal} onRequestClose={() => setShowModal(false)} >
                <p>Are You sure to delete this task?</p>
                <button className={`${styles.btn} ${styles.btnClose}`} onClick={() => setShowModal(false)}>Close</button>
                <button className={`${styles.btn} ${styles.btnDelete}`} onClick={handleDelete}>Delete</button>
            </Modal >
        </>
    )
}

export default DeleteModal
