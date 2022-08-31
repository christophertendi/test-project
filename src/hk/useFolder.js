// import { useReducer, useEffect } from 'react'

// const ACTIONS ={
//     SELECT_FOLDER: 'select-folder',
//     UPDATE_FOLDER: 'update-folder'

// }

// const ROOT_FOLDER = { name: 'Main', id: null, path:[] }


// function reducer(state, { type, payload }){
//     switch (type) {
//         case ACTIONS.SELECT_FOLDER:
//             return{
//                 folderID: payload.folderID,
//                 folder: payload.folder,
//                 childFiles: [],
//                 childFolders: []
//             }
//         case ACTIONS.UPDATE_FOLDER:
//             return{
//                 ...state,
//                 folder: payload.folder
//             }

//         default:
//             return state

//     }

// }

// export function useFolder(folderID = null, folder = null){
//     const [state, dispatch] = useReducer(reducer, {
//         folderID,
//         folder,
//         childFolders: [],
//         childFiles: []
//     })

//     useEffect(() => {
//         dispatch({ type: ACTIONS.SELECT_FOLDER, payload:{ folderID, folder }})
//     }, [folderID, folder])

//     useEffect(() => {
//         if (folderID == null){
//             return dispatch({
//                 type: ACTIONS.UPDATE_FOLDER,
//                 payload: { folder: ROOT_FOLDER }
//             })
//         }

//     }, [folderID])

//     return state




// }

