import React, { useState } from 'react'
import styles from './TodoItemAddForm.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../redux/task/taskActions'
import { v4 as uuid } from 'uuid';


const TodoItemAddForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        id: '',
        title: '',
        description: '',
        finished: false
    })

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setForm({
            ...form,
            id: uuid(),
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('save')
        dispatch(addTask(form))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={form.title} onChange={e => handleChange(e)} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="description">Description</label>
                <input type="description" name="description" id="description" onChange={e => handleChange(e)} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="finished">Finished</label>
                <input type="checkbox" name="finished" id="finished" onChange={e => handleChange(e)} />
            </div>
            <button type='submit'>Save</button>
        </form >
    )
}

export default TodoItemAddForm
