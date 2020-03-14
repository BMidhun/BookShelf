import axios from "axios";
import { ServerURL } from "../constants/constants";

export async function getBooks (limit=10,skip=0,order='asc',list=''){

    const request = `${ServerURL}/book/getbooks?skip=${skip}&&limit=${limit}&&order=${order}`
    const response = await axios.get(request);
    if(response.data.success){
        if(list){
            return {type : "GET_BOOKS", payload:[...response.data.data,...list]}
        }
        else
        return {
            type : "GET_BOOKS",
            payload : response.data.data
        }
    }

    return {type:"GET_BOOKS",payload:null}
  
}

export async function getABook (id) {
    const request = `${ServerURL}/book/getbook?id=${id}`;
    const response = await axios.get(request);
    if(response.data.success){
        return async (dispatch)=>{
            const book = response.data.data;
            const req = `${ServerURL}/user/getreviewer?id=${book.ownerId}`;
            const res = await axios.get(req);

            if(res.data.success){
                const owner = res.data.data.firstname + ' ' + res.data.data.lastname;
                const data = {...book,owner:owner};
                dispatch({type:'GET_BOOKWITHOWNER',payload:data})
            } 
            else
                return {type:"GET_BOOKWITHOWNER",payload:null}

        }
    }

    return {type:"GET_BOOK",payload:null};
}

export async function getBookWithId (id){
    const request = `${ServerURL}/book/getbook?id=${id}`;
    const response = await axios.get(request);
    if(response && response.data.success){
        const book = response.data.data
        return {type:"GET_BOOK",payload:book}
    }
    else
        return {type:"GET_BOOK",payload:null}
}

export async function updateBook(formData){
    const request = `${ServerURL}/book/updatebook`
    const response = await axios.put(request,formData);
    if(response && response.data.success){
        return {type:"UPDATE_BOOK",payload:response.data.data}
    }
    else
        return {type:"UPDATE_BOOK",payload:null}
 }

 export async function deleteBookById (id) {
     const request = `${ServerURL}/book/deletebook?id=${id}`
     const response = await axios.delete(request);
     if(response.data.success){
         return {type:'DELETE_BOOK',payload:response.data.success}
     }
     else
        return {type:'DELETE_BOOK',payload:response.data.success}
 }

export function clearBook (){
    return {type:'CLEAR_BOOK', payload:null}
}
export function clearNewBook (){
    return {type:'CLEAR_NEWBOOK', payload:null}
}

export function clearUpdatedBook () {
    return {type:"CLEAR_UPDATEDBOOK",payload:null}
}


export function clearBooks (){
    return {type:'CLEAR_BOOKS', payload:null}
}

export async function AddBook (book) {
    const request = `${ServerURL}/book/addbook`
    const response = await axios.post(request,book)

    if(response.data.success)
    return {type:'ADD_BOOK',payload:response.data.data}

    else
        return {type:'ADD_BOOK',payload:null}
}