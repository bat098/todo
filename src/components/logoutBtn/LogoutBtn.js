import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/authActions'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(logout())}>
            Logout
        </button>
    )
}

export default LogoutBtn
