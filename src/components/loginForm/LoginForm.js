import React, { useState } from 'react'
import styles from './LoginForm.module.scss'
import { fetchLogin } from '../../redux/auth/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const initialLogin = {
    email: 'mateusz@mail.pl',
    password: 'qwe123qwe'
}

const LoginForm = () => {
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.auth.isLogged)
    const error = useSelector(state => state.auth.error)
    const [form, setForm] = useState(initialLogin)
    const { email, password } = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchLogin(form))
    }



    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input className={styles.input} placeholder='Enter your adress email' type="text" id="email" name="email" value={email} onChange={handleChange} />

            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input className={styles.input} placeholder='Enter your password' type="password" id="password" name="password" value={password} onChange={handleChange} />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.btn} type='submit'>Login</button>
            {isLogged && <Redirect to='/todo' />}
        </form>
    )
}

export default LoginForm
