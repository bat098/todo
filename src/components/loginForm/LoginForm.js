import React, { useState } from 'react'
import styles from './LoginForm.module.scss'
import { fetchLogin } from '../../redux/auth/authActions'
import { useDispatch } from 'react-redux'

const initialLogin = {
    login: 'mateusz@mail.pl',
    password: 'qwe123qwe'
}

const LoginForm = () => {
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState(initialLogin)
    const { login, password } = loginData
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchLogin(loginData))
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="email">Login</label>
                <input type="text" id="email" name="email" value={login} onChange={e => setLoginData({ ...loginData, login: e.target.value })} ></input>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setLoginData({ ...loginData, password: e.target.value })}></input>
            </div>
            <button type='submit'>Login</button>

        </form>
    )
}

export default LoginForm
