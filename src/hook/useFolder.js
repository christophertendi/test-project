// import { useEffect, useReducer } from 'react'
// import { database } from '../firebase'
// import { useAuth } from '../isi/iAuth'
// const ACT = {
//     SELECT_FOLDER: 'select-folder',
//     UPDATE_FOLDER: 'update-folder',
//     SET_CFOLDERS: 'set-child-folders'


// }
 
// const ROOT_FOLDER = { name: 'Main', id: null, path: [] }

// function reducer(state, { type, payload }) {
//     switch (type){
//         case ACT.SELECT_FOLDER:
//             return{
//                 folderID: payload.folderID,
//                 folder: payload.folder,
//                 childFolders: [],
//                 childFiles: []
//             }
//         case ACT.UPDATE_FOLDER:
//             return{
//                 ...state,
//                 folder: payload.folder,
//             }
//         case ACT.SET_CFOLDERS:
//             return{
//                 ...state,
//                 childFolders: payload.folder,
//             }


//         default:
//             return state
//     }

// }

// export function useFolder (folderID = null, folder = null){
//     const [ state, dispatch ] = useReducer(reducer, {
//         folderID,
//         folder,
//         childFolders: [],
//         childFiles: []
//     })

//     const { cUser } = useAuth()

//     useEffect(() =>{
//         dispatch({ type: ACT.SELECT_FOLDER, payload:{ folderID, folder } })
//     }, [folderID, folder])

//     useEffect(() => {
//         if(folderID ==null){
//             return dispatch({
//                 type: ACT.UPDATE_FOLDER, 
//                 payload: { folder: ROOT_FOLDER}
//             })
//         }

//         database.folders.
//         doc(folderID).
//         get().then(doc => {
//             dispatch({
//                 type: ACT.UPDATE_FOLDER, 
//                 payload: { folder: database.formatDoc(doc)}
//             })
//         })
//         .catch(() => {
//             dispatch({
//                 type: ACT.UPDATE_FOLDER, 
//                 payload: { folder: ROOT_FOLDER}
//             })
//         })

//     }, [folderID])

//     useEffect(() => {
//         const cleanup = database.folders
//             .where("parentID", "==", folderID)
//             .where("userID", "==", cUser.uid)
//             .orderBy("createTime")
//             .onSnapshot(snapshot => {
//                 dispatch({
//                     type: ACT.SET_CFOLDERS,
//                     payload: {childFolders: snapshot.docs.map(database.formatDoc)}
//                 })
//             })

//         return () => cleanup()

//     }, [folderID])

//     return state
// }

