import React, { useState } from 'react'
import styles from './TodoItemAddForm.module.scss'
import { useDispatch } from 'react-redux'
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
        dispatch(addTask(form))
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="title">Title</label>
                <input className={styles.input} type="text" name="title" id="title" value={form.title} onChange={e => handleChange(e)} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="description">Description</label>
                <input className={styles.input} type="description" name="description" id="description" onChange={e => handleChange(e)} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="finished">Finished</label>
                <input className={styles.input} type="checkbox" name="finished" id="finished" onChange={e => handleChange(e)} />
            </div>
            <button className={styles.saveBtn} type='submit'>Save</button>
        </form >
    )
}

export default TodoItemAddForm
