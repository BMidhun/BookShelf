import React from 'react'
import { connect } from "react-redux";
import { getBooks,clearBooks } from '../../../actions/book.action';
import HomeComponent from '../component/home.component';

const HomeContainer = ({dispatch,bookState}) => {

    const [bookCount,setBookCount] = React.useState(1);

    React.useEffect(() => {
        dispatch(getBooks(6,0,'desc'));
    },[dispatch])



 
   const onLoadMore = () => {
        const count = bookState.bookList.length;
        if(count === bookCount)
            setBookCount(prev=>prev*0);
        else
            setBookCount(count)

        dispatch(getBooks(3,count,'desc',bookState.bookList))
    }
    
    React.useEffect (() => {
        return () => {
            dispatch(clearBooks())
        }
    },[dispatch])

    return <HomeComponent books={bookState.bookList} onLoadMore={onLoadMore} bookCount={bookCount} />
    // return null
    
}

const mapStateToProps = (state) => ({bookState:state.bookReducer})


export default React.memo(connect(mapStateToProps,null)(HomeContainer));
