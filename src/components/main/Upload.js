// import React,{useState} from 'react'
// import {Form, Modal, Button} from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFolderPlus} from '@fortawesome/free-solid-svg-icons'
// import { database } from '../../firebase'
// import { useAuth } from '../../isi/iAuth'
// // import { db } from '../../firebase'
// // import {  addDoc, collection, } from 'firebase/firestore'
// // // import db from '../../firebase'

// export default function Upload({ currentFolder }) 
// {
//     const[buka, sBuka] = useState(false)
//     const[name, sString] = useState("")
//     const{ cUser } = useAuth()

//     function sTabO() 
//     {
//         sBuka(true)
//     }
//     function sTabC()
//     {
//         sBuka(false)
//     }

//     function Submith(e) 
//     {
//         e.preventDefault()
//         if (currentFolder == null) return

//         // await addDoc(collection(db,'folders'),{
//         //     name:name
//         // })

//         database.folders.add({
//             name: name,
//             parentId: currentFolder.id,
//             uID: cUser.uid,
//             // path,
//             cTime: database.cTimeStamp(),
//         })
//         sString("")
//         sTabC()
//     }

//     return (
//         <>
//             <Button onClick={sTabO} variant="outline-primary" size="lg" className = "mt-3">
//                 <FontAwesomeIcon icon={faFolderPlus} />
//             </Button>
//             <Modal show = {buka} onHide={sTabC}>
//                 <Form onSubmit={Submith}>
//                     <Modal.Body>
//                         <Form.Group>     
//                             <Form.Label><h5>Folder Name</h5></Form.Label>
//                             <Form.Control 
//                                 type = "text"
//                                 required
//                                 value ={name}
//                                 onChange = {e =>sString(e.target.value)}
//                             />
//                         </Form.Group>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button onClick={Submith} variant="success" type="submit" size="lg">Add Folder</Button>
//                     </Modal.Footer>
//                 </Form>
//             </Modal>
//         </>
//     )
// }

