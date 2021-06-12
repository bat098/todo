import React, { useState, useEffect } from 'react'
import styles from './TodoItem.module.scss'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../redux/task/taskActions'
import { useDispatch } from 'react-redux'
import DeleteModal from '../deleteModal/DeleteModal'


const TodoItem = ({ item }) => {

    const { id, title, finished } = item

    const [showModal, setShowModal] = useState(false)

    // const [checkbox, setCheckbox] = useState(false)
    // const handleChange = (e) => {
    //     setCheckbox(e.target.checked)
    // }
    // useEffect(() => {
    //     setCheckbox(finished)
    // }, [item])
    return (
        <div className={styles.todoItem}>
            <div className={styles.title}>{title}</div>
            <input type="checkbox" name="finished" id="finished" defaultChecked={finished} />
            <button onClick={() => setShowModal(true)} className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
            <Link to={`/todo/${id}`}>
                <button className={`${styles.btn} ${styles.btnDetails}`}>Details</button>
            </Link>
            <DeleteModal showModal={showModal} setShowModal={setShowModal} id={id} />

        </div>
    )
}

export default TodoItem
