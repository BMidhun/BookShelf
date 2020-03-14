import React from 'react'
import BookViewComponent from '../component/book.component'
import { getABook, clearBook } from '../../../actions/book.action'
import {connect} from 'react-redux'

// props.match.params.id
const BookViewContainer = ({dispatch,match,bookState}) => {

    const [bookData,setBookData] = React.useState(null);
    
    React.useEffect(() => {
        dispatch(getABook(match.params.id))
    },[dispatch,match.params.id])

    React.useEffect(() => {
        setBookData(bookState.book);
    },[bookState.book])

    React.useEffect(() => {
        return () => {
            dispatch(clearBook())
        }
    },[dispatch])
    
    return (
        <BookViewComponent book={bookData} />
    )
}

const mapStateToProps = (state) => ({bookState:state.bookReducer})

export default connect(mapStateToProps,null)(BookViewContainer);
