import React from 'react'
import LogoutBtn from '../logoutBtn/LogoutBtn'
import styles from './Navbar.module.scss'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const isLogged = useSelector(state => state.auth.isLogged)
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Logo</div>
            {isLogged && <LogoutBtn />}

        </nav>
    )
}

export default Navbar
