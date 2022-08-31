import React from 'react'
import { auth } from '../../firebase'
import { Navigate } from 'react-router-dom'

const Private = ({ children }) => {
    let CUser = auth.currentUser
    if (!CUser){

        return (
            <Navigate to={'/login'} replace/>
        )
    } return children
}

export default Private