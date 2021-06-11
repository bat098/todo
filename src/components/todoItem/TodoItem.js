import React from 'react'
import styles from './TodoItem.module.scss'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../redux/task/taskActions'
import { useDispatch } from 'react-redux'

const TodoItem = ({ item }) => {
    const dispatch = useDispatch()
    const { id, title, finished } = item
    return (
        <div className={styles.todoItem}>
            <div>{title}</div>
            <input type="checkbox" name="finished" id="finished" />
            <button onClick={() => dispatch(deleteTask(id))} className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
            <Link to={`/todo/${id}`}>
                <button className={`${styles.btn} ${styles.btnDetails}`}>Details</button>
            </Link>
        </div>
    )
}

export default TodoItem
