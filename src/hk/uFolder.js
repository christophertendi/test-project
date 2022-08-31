// import { useEffect, useReducer } from 'react'
// import { database } from '../firebase'
// import { useAuth } from '../isi/iAuth'

// const AC = {
//     SFOLDER: "select-folder",
//     UD_FOLDER: "update-folder",
//     S_CHILD_FOLDERS: "set-child-folder"


// }

// const RFOLDER = { name: 'Main',id: null, path:[] }

// function reducer(state, { type, payload }){
//     switch (type){
//         case AC.SFOLDER:
//             return{
//                 fID: payload.fID,
//                 folder: payload.folder,
//                 cFolders: [],
//                 cFiles: []
//             }
//         case AC.UD_FOLDER:
//             return{
//                 ...state,
//                 folder: payload.folder
//             }

//         case AC.S_CHILD_FOLDERS:
//             return{
//                 ...state,
//             cFolders: payload.cfolders
//             }
            
//         default:
//             return state
//     }
    

// }

// export function useFolder(fID = null, folder = null) {
//     const[state, dispatch] = useReducer(reducer, {
//         fID,
//         folder,
//         cFolders: [],
//         cFiles: []
//     })
//     const { cUser } = useAuth()

//     useEffect(() => {
//         dispatch({type: AC.SFOLDER, payload: { fID, folder } })

//     }, [fID, folder])

//     useEffect(() => {

//         if (fID == null){
//             return dispatch({
//                 type: AC.UD_FOLDER,
//                 payload: {folder:RFOLDER},
//             })
//         }

//         database.folders.doc(fID).get().then(doc => {
//             dispatch({
//                 type: AC.UD_FOLDER,
//                 payload: {folder: database.fDoc(doc)},
//             })
//         })
           
//          .catch(() => {
//             dispatch({
//                 type: AC.UD_FOLDER,
//                 payload: { folder:RFOLDER },
//             })
//         })

//     },[fID])

//     useEffect(() => {
//         return database.folders
//             .where("parentId", "==", fID)
//             .where("uID", "==", cUser.uid)
//             .orderBy("cTime")
//             .onSnapshot(snapshot => {
//                 dispatch({
//                     type: AC.S_CHILD_FOLDERS,
//                     payload: {cFolders: snapshot.docs.map(database.fDoc)},
//                 })
            
//             })
//     },[fID, cUser])
    
//     return state

// }