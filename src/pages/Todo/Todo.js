import React, { useEffect, useState } from 'react'
import TodoItem from '../../components/todoItem/TodoItem'
import TodoItemAddForm from '../../components/todoItemAddForm/TodoItemAddForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../../redux/task/taskActions'

const Todo = () => {
    const dispatch = useDispatch()

    const tasks = useSelector(state => state.tasks.tasks)
    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            {
                tasks.map(item => <TodoItem key={item.id} item={item} />)
            }
            <button onClick={() => setShowForm(prevState => !prevState)}>Add Item</button>
            {
                showForm && <TodoItemAddForm />
            }
        </div>
    )
}

export default Todo
