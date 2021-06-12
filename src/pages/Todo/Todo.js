import React, { useEffect, useState } from 'react'
import TodoItem from '../../components/todoItem/TodoItem'
import TodoItemAddForm from '../../components/todoItemAddForm/TodoItemAddForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../../redux/task/taskActions'
import styles from './Todo.module.scss'

const Todo = () => {
    const dispatch = useDispatch()

    const tasks = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])
    // const [tasks, setTasks] = useState(todo)
    // useEffect(() => {
    //     dispatch(fetchTasks())
    // }, [])

    // useEffect(() => {
    //     setTasks(todo)
    // }, [todo])

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

export default Todo
