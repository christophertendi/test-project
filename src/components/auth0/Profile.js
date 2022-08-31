import React, {useState} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../isi/iAuth'
import { useNavigate } from 'react-router-dom'
import BiarRapih from "./BiarRapih"

export default function Profile() {
    const[error, sError] = useState("")
    const{ cUser, logout } = useAuth()
    const navigate = useNavigate()


    async function hl() {

        sError('')

        try
        {
            await logout()
            navigate('/login')
        }   catch (e){ console.log(e)
            sError('Logout failed')
        }
    }
    
    return (
        <BiarRapih>
            <Card>

                <Card.Body>
                <h2 className="text-center mb-4 w-100">Profile</h2>
                {error && <Alert variant = "danger">{error}</Alert>}
                <b>Email: </b>{cUser.email}
                </Card.Body>
                
            </Card>
            <div className="w-100 text-center mt-2 mb-4">
                <Button className ="w-50 mt-4 bg-success text-white" onClick = {hl}>Log Out</Button>
            </div>
        </BiarRapih>
  )
}
