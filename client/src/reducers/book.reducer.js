export default function (prevState={},action){

    switch(action.type){

        case "GET_BOOKS" : return {...prevState,bookList:action.payload}
        case "GET_BOOK" : return {...prevState,bookdata:action.payload}
        case "GET_BOOKWITHOWNER" : return {...prevState,book:action.payload}
        case "UPDATE_BOOK" : return {...prevState,updatedBook:action.payload}
        case "DELETE_BOOK" : return {...prevState,isBookDeleted:action.payload}
        case "CLEAR_BOOK" : return {...prevState,book:action.payload,bookdata:action.payload,isBookDeleted:action.payload}
        case "CLEAR_BOOKS" : return {...prevState,bookList:action.payload}
        case "ADD_BOOK" : return {...prevState,newbook:action.payload}
        case "CLEAR_NEWBOOK" : return {...prevState,newbook:action.payload}
        case "CLEAR_UPDATEDBOOK" : return {...prevState,updatedBook:action.payload}
        default : return {...prevState}
    }
}