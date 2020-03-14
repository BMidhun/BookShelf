import React from 'react'

const BookViewComponent = ({book}) => {

    const renderBook = () => {
        return <div className="br_container">
                   <div className="br_header">
                        <h2>{book.name}</h2>
                        <h5>{book.author}</h5>
                        <div className="br_reviewer">
                            <span>Review by:</span>
                             {book.owner}
                        </div>
                    </div>
                    <div className="br_review">
                        {book.review}
                    </div>
                    <div className="br_box">
                        <div className="left">
                            <div><span>Pages:</span> {book.pages}</div>
                            <div><span>Price</span> &#8377;{book.price} </div>
                        </div>
                        <div className="right">
                            <span>Rating</span>
                            <div>{book.rating}/5</div>
                        </div>
                    </div>
               </div>
    }
    
    return book ? renderBook() : null
}


export default BookViewComponent;
