import React from 'react'
import EditBookComponent from '../component/editbook.component'
import { getBookWithId, updateBook, clearUpdatedBook, clearBook, deleteBookById } from '../../../actions/book.action'
import { connect } from "react-redux";

const EditBookContainer = ({dispatch,match,bookState,history}) => {

    const [formData,setFormData] = React.useState({
        _id:'',
        name:'',
        author:'',
        review:'',
        pages:'',
        rating:'',
        price:''
    })

    React.useEffect(() => {
        if(bookState.bookdata){
            const formData = {
                _id:bookState.bookdata._id,
                name:bookState.bookdata.name,
                author:bookState.bookdata.author,
                review:bookState.bookdata.review,
                pages:bookState.bookdata.pages,
                rating:bookState.bookdata.rating,
                price:bookState.bookdata.price
            }
    
            setFormData(formData);
        }
       
    },[bookState.bookdata])

    React.useEffect(() => {
        dispatch(getBookWithId(match.params.id));
    },[dispatch,match.params.id])

    React.useEffect(() => {
        return () => {
            dispatch(clearUpdatedBook());
            dispatch(clearBook());
        }
       
    },[dispatch])

    const handleInput = (event) => {
        const {name,value} = event.target
        setFormData(prev=>({...prev,[name]:value}))
    }

    const submitForm = (event) => {
        event.preventDefault(); 
        dispatch(updateBook(formData));
    }

    const deleteBook = () => {
        dispatch(deleteBookById(bookState.bookdata._id))
    }

    const redirectUser = () => {
        setTimeout(() => {
            history.push('/user/posts')
        },1000)
    }

    return (
        <EditBookComponent
        formData={formData} 
        handleInput = {handleInput} 
        submitForm = {submitForm}
        updatedBook = {bookState.updatedBook}
        deleteBook={deleteBook}
        isDeleted = {bookState.isBookDeleted}
        redirectUser = {redirectUser}
         />
    )
}

const mapStateToProps = (state) => ({bookState : state.bookReducer })

export default React.memo(connect(mapStateToProps)(EditBookContainer));
