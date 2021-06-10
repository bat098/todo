import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from '../redux/auth/authActions'
import LoginForm from '../components/loginForm/LoginForm'

const Home = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.data)

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Home
