import React from 'react'


const isLogged = () => {
    const token = localStorage.getItem('token')
    if (token) {
        return true
    }
    else return false

}

export default isLogged
