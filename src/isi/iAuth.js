import React,{ useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthC = React.createContext()

export function useAuth(){
    return useContext(AuthC)
}

export function AuthP({ children }){
    const [cUser, scUser] = useState()
    const [loading, sLoading] = useState(true)

    function signup (email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login (email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function rPassword(email){
        return auth.sendPasswordResetEmail(email)

    }
    
    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            scUser(user)
            sLoading(false)
            
        })

        return unsub
    },[])
   
    const value = {
        cUser,
        login,
        signup,
        logout,
        rPassword
    }
    
    return (
        <AuthC.Provider value = {value}>
            {!loading && children}
        </AuthC.Provider>
    )
}
