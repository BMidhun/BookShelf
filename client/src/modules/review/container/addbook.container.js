import React from 'react'
import AddReviewComponent from '../component/addbook.component'
import { connect } from "react-redux";
import { AddBook, clearNewBook } from '../../../actions/book.action';


const AddReviewContainer = ({user,dispatch,bookState,history}) => {

    const [formData,setFormData] = React.useState({
        name:'',
        author:'',
        review:'',
        pages:'',
        rating:1,
        price:''
    })

   

    React.useEffect(() => {
        return () => {
            dispatch(clearNewBook());
        }
    },[dispatch])

   

    const handleInput = (event) => {
        const {name,value} = event.target
        setFormData(prev=>({...prev,[name]:value}))
    }

    const submitForm = (event) => {
        event.preventDefault(); 
        const book = {...formData,ownerId:user.userdata.data._id};
        dispatch(AddBook(book));

    }

    React.useEffect(() => {
        if(bookState.newbook)
        {  setTimeout(() => {
             history.push(`/books/${bookState.newbook._id}`)
         },500);
     }
    },[bookState.newbook])

    console.log(bookState.newbook)
 
    return (
        <AddReviewComponent 
        formData={formData} 
        handleInput = {handleInput} 
        submitForm = {submitForm}
        book = {bookState.newbook}
        />
    )
}

const mapStateToProps = (state) => { return {bookState: state.bookReducer } }

export default connect(mapStateToProps)(AddReviewContainer);
