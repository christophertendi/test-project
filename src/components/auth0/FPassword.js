import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../isi/iAuth'
import { Link } from "react-router-dom"
import BiarRapih from "./BiarRapih"

 
export default function FPassword() {
    const eRef = useRef()
    const { rPassword } = useAuth()
    const[error, sError] = useState("")
    // const[message, sMessage] = useState("")
    const[loading, sLoading] = useState(false)

    async function Submith(e)
    {
        e.preventDefault()

        try{
            console.log(e)
            sError("")
            sLoading(true)
            await rPassword(eRef.current.value) 
            alert("Please check your inbox for further instructions")
        }   catch (e) { console.log(e) 
            sError("Please enter the correct email address")

        }   

        sLoading(false)
        
    }
    return (
        <BiarRapih>  
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4 w-100">Reset Password</h2>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit={Submith}>
                        <Form.Group className = "w-100 mt-2 mb-2" id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  ref={eRef} required />
                        </Form.Group>
                        <div className="text-center">
                          <Button disabled={loading} className ="w-50 mt-4 bg-success text-white" type="submit">Reset Password</Button>
                        </div>
                    </Form> 
                    <div className="w-100 text-center mb-2 mt-4">
                        <h6><Link to="/login">Login</Link></h6>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 mb-4">
              <h6>Don't have an account yet? <Link to="/signup">Sign up here</Link></h6>
            </div>
        </BiarRapih>
    
    )

}

