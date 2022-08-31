// import React, { useState } from 'react'
// import { Button, Modal, Form } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
// import { database } from "../../firebase"
// import { useAuth } from "../../isi/iAuth"

// export default function AddFolder({ currentFolder }) {
//     const [open, setOpen] = useState(false)
//     const [names, setName] = useState("")
//     const { cUser } = useAuth()


//     function openModal(){
//         setOpen(true)
//     }

//     function openModal(){
//         setOpen(true)
//     }

//     function closeModal(){
//         setOpen(false)
//     }

//     function handleSubmit(e){
//         e.preventDefault()
        
//         if(currentFolder == null) return
        
//         database.folders.add({
//             name: names,
//             parentID: currentFolder.id,
//             userID: cUser.uid,
//             // path,
//             createTime: database.getCurrentTime()
//         })
//         setName("")
//         closeModal()
//     }

//     return (
//         <>
//         <Button onClick={openModal} variant= "outline-primary" size="lg" className = "mt-3">
//             <FontAwesomeIcon icon = {faFolderPlus} /> 
//         </Button>
//         <Modal show = {open} onHide = {closeModal}>
//             <Form onSubmit = {handleSubmit}>
//                 <Modal.Body>
//                     <Form.Group>
//                         <Form.Label>Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             required
//                             value={names}
//                             onChange={e => setName(e.target.value)}
                            
//                         />
//                     </Form.Group>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant = "danger" onClick ={closeModal} >
//                         Close 
//                     </Button>
//                     <Button variant = "primary" type="submit">
//                         Add Folder
//                     </Button>
//                 </Modal.Footer>
//             </Form>
//         </Modal>
//         </>
//     )
// }
