import React, { useState, useEffect } from 'react'
import styles from './TodoItem.module.scss'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../redux/task/taskActions'
import { useDispatch } from 'react-redux'
import DeleteModal from '../deleteModal/DeleteModal'


const TodoItem = ({ item }) => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const { id, title, finished } = item
    const [checkbox, setCheckbox] = useState(false)
    const handleChange = (e) => {
        setCheckbox(e.target.checked)
    }
    useEffect(() => {
        setCheckbox(finished)
    }, [])
    return (
        <div className={styles.todoItem}>
            <div>{title}</div>
            <input type="checkbox" name="finished" id="finished" defaultChecked={finished} onChange={e => handleChange(e)} />
            <button onClick={() => setShowModal(true)} className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
            <Link to={`/todo/${id}`}>
                <button className={`${styles.btn} ${styles.btnDetails}`}>Details</button>
            </Link>
            <DeleteModal showModal={showModal} setShowModal={setShowModal} id={id} />
        </div>
    )
}

export default TodoItem
