import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../isi/iAuth'
import { Link, useNavigate } from "react-router-dom"
import BiarRapih from "./BiarRapih"

 
export default function SignUp() {
    const eRef = useRef()
    const pRef = useRef()
    const pcRef = useRef()
    const { signup } = useAuth()
    const[error, sError] = useState("")
    const[loading, sLoading] = useState(false)
    const navigate = useNavigate()

    async function Submith(e)
    {
        e.preventDefault()

        if (pRef.current.value !== pcRef.current.value){
            return sError('Please enter a matching password')
        }
        
        try{
            sError("")
            sLoading(true)
            await signup(eRef.current.value, pRef.current.value)
            navigate("/login")
        }   catch (e){ console.log(e) 
            sError("Sign up failed, account already exists")

        }   

        sLoading(false)
        
    }
    return (
        <BiarRapih>  
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4 w-100">Welcome to Submit It!</h1>
                    <h2 className="text-center mb-4 w-100">Please Sign Up</h2>
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
                        <Form.Group className = "w-100 mt-2 mb-2" id="p-confirm">
                            <Form.Label>Confirm your password</Form.Label>
                            <Form.Control type="password"  ref={pcRef} required />
                        </Form.Group>
                        <div className="text-center">
                            <Button disabled={loading} className ="w-50 mt-4 bg-success text-white" type="submit">Sign Up</Button>
                        </div>
                    </Form> 
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 mb-4">
                <h6>Already have an account? <Link to="/login">Login here</Link></h6>
            </div>
        </BiarRapih>
    )

}
