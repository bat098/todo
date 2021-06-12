import React, { useEffect, useState } from 'react'
import TodoItem from '../todoItem/TodoItem'
import TodoItemAddForm from '../todoItemAddForm/TodoItemAddForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../../redux/task/taskActions'
import styles from './TodoList.module.scss'

const TodoList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)
    useEffect(() => {
        dispatch(fetchTasks())
    }, [])
    const [showForm, setShowForm] = useState(false)

    return (
        <div className={styles.todo}>
            {
                tasks.map(item => <TodoItem key={item.id} item={item} />)
            }
            <button className={styles.btnAdd} onClick={() => setShowForm(prevState => !prevState)}>Add task</button>
            {
                showForm && <TodoItemAddForm />
            }
        </div>
    )
}

export default TodoList
