import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { detailsTask, editTask } from '../../redux/task/taskActions'
import DeleteModal from '../deleteModal/DeleteModal'
import styles from './TodoItemsDetails.module.scss'

const TodoItemsDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const param = useParams()
    const itemDetails = useSelector(state => state.tasks.details)
    const [form, setForm] = useState({})
    const { id, title, description, finished } = form

    useEffect(() => {
        dispatch(detailsTask(param.id))
    }, [])


    useEffect(() => {
        setForm(itemDetails)
    }, [itemDetails])


    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setForm({
            ...form,
            [e.target.name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
        const updatedTask = {
            title,
            description,
            finished
        }
        dispatch(editTask(id, updatedTask))
    }

    return (
        <>
            {
                edit ? <form className={styles.form} onSubmit={onSubmit} >
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="title">Title</label>
                        <input className={styles.input} type="text" name="title" id="title" value={title} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="description">Description</label>
                        <input className={styles.input} type="description" name="description" id="description" value={description} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="finished">Finished</label>
                        <input type="checkbox" name="finished" id="finished" defaultChecked={finished} onChange={handleChange} />
                    </div>
                    <button className={`${styles.btn} ${styles.btnSave}`} type='submit'>Save Change</button>
                </form> :
                    <div className={styles.details}>
                        <div className={styles.title}><span className={styles.tag}>Title: </span>{title}</div>
                        <div className={styles.description}><span className={styles.tag}>Description: </span>{description}</div>
                        <div className={styles.finished}><span className={styles.tag}>Finished: </span><input type="checkbox" name="finished" id="finished" defaultChecked={finished} onChange={e => handleChange(e)} disabled /></div>
                        <button className={`${styles.btn} ${styles.btnEdit}`} onClick={() => setEdit(true)}>Edit</button>
                        <button className={`${styles.btn} ${styles.btnDelete}`} onClick={() => setShowModal(true)}>Delete</button>
                        <DeleteModal showModal={showModal} setShowModal={setShowModal} id={param.id} />
                    </div>
            }
        </>
    )
}

export default TodoItemsDetails
