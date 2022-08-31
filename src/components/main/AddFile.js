// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
// import { useAuth } from '../../isi/iAuth'
// import { storage } from '../../firebase'


// export default function AddFile({ currentFolder }) {
//     const { cUser } = useAuth()
//     function handleUpload(e){
//         const file = e.target.files[0]
//         if (currentFolder == null || file == null) return

//         const fileP = currentFolder.path.length > 0 ? 
//         `${currentFolder.path.join('/')}/${file.name}` : file.name

//         const uploadWork = storage.ref(`/files/${cUser.id}/${fileP}`).put(file)

//     }

//     return (
//         <label className="btn btn-outline-primary btn-lg mt-3 ms-3">
//             <FontAwesomeIcon icon={faFileUpload} />
//             <input type = "file" onChange = {handleUpload} style = {{opacity:0, position:'absolute', left: '-99999px'}} /> 
//         </label>
//     )
// }
