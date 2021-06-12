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

    const [form, setForm] = useState(itemDetails)
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
            title: form.title,
            description: form.description,
            finished: form.finished
        }
        dispatch(editTask(id, updatedTask))
    }



    return (
        <>
            {
                edit ? <form onSubmit={onSubmit} >
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={title} onChange={e => handleChange(e)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description</label>
                        <input type="description" name="description" id="description" value={description} onChange={e => handleChange(e)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="finished">Finished</label>
                        <input type="checkbox" name="finished" id="finished" defaultChecked={finished} onChange={e => handleChange(e)} />
                    </div>
                    <button type='submit'>Save Change</button>
                </form> :
                    <div>

                        <div>id:{id}</div>
                        <div>title:{title}</div>
                        <div>desc: {description}</div>
                        <div>finished<input type="checkbox" name="finished" id="finished" defaultChecked={finished} onChange={e => handleChange(e)} disabled /></div>
                        <button onClick={() => setEdit(true)}>Edit</button>
                        <button onClick={() => setShowModal(true)}>Delete</button>
                        <DeleteModal showModal={showModal} setShowModal={setShowModal} id={param.id} />
                    </div>
            }
        </>
    )
}

export default TodoItemsDetails
