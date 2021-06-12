import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/authActions'
import styles from './LogoutBtn.module.scss'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    return (
        <button className={styles.btn} onClick={() => dispatch(logout())}>
            log out
        </button>
    )
}

export default LogoutBtn
