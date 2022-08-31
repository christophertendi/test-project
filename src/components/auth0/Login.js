import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../isi/iAuth'
import { Link, useNavigate } from "react-router-dom"
import BiarRapih from "./BiarRapih"

 
export default function Login() {
    const eRef = useRef()
    const pRef = useRef()
    const { login } = useAuth()
    const[error, sError] = useState("")
    const[loading, sLoading] = useState(false)
    const navigate = useNavigate()

    async function Submith(e)
    {
        e.preventDefault()

        try{
            sError("")
            sLoading(true)
            await login(eRef.current.value, pRef.current.value)
            navigate("/")
        }   catch (e) { console.log(e) 
            sError("Login failed, make sure you have entered the correct credentials")

        }   

        sLoading(false)
        
    }
    return (
        <BiarRapih>  
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4 w-100">Welcome Back! Please Login</h2>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit={Submith}>
                        <Form.Group className = "w-100 mt-2 mb-2" id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  ref={eRef} required />
                        </Form.Group>
                        <Form.Group className = "w-100 mt-2 mb-2" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  ref={pRef} required />
                        </Form.Group>
                        <div className="text-center">
                            <Button disabled={loading} className ="w-50 mt-3 mb-3 bg-success text-white" type="submit">Login</Button>
                        </div>
                    </Form> 
                    <div className="w-100 text-center mb-3 mt-3">
                        <h6><Link to="/fPassword" class>Forgot your password?</Link></h6>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-3 mb-3">
                <h6>Don't have an account yet? <Link to="/signup">Sign up here</Link></h6>
            </div>
        </BiarRapih>
    )

}

