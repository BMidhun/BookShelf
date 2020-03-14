import React from 'react'
import { Link } from "react-router-dom";
const HomeComponent = ({books,onLoadMore,bookCount}) => {
    
    const renderBooks = () => {
        
        return books.map(book => {
            return <Link to={`/books/${book._id}`} className="book_item"  key={book._id}>
                     <div className="book_header">
                         <h2>{book.name}</h2>
                     </div>
                     <div className="book_items">
                        <div className="book_author">{book.author}</div>
                        <div className="book_bubble">
                            <strong>Price</strong> &#8377; {book.price}
                        </div>
                        <div className="book_bubble">
                            <strong>Pages</strong> {book.pages}
                        </div>
                        <div className="book_bubble rating">
                            <strong>Rating</strong> {book.rating}
                        </div>
                     </div>
                    </Link>
        })
    }

   if(books){
       return <div>
                    {renderBooks()}
                    { bookCount ? <div className="loadmore" onClick={onLoadMore}>Load More</div> : null }
             </div>
    }
    return null
}

export default HomeComponent;
