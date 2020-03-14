import React from 'react'
import { Link } from "react-router-dom";

const AddBookComponent = ({formData,handleInput,submitForm,book}) => {
    return (
        <div className="rl_container article">
            <form onSubmit={submitForm}>
                <h2>Add a Review</h2>

                <div className="form_element">
                    <input type="text" 
                    placeholder="Enter name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInput}
                    required
                    />
                </div>

                <div className="form_element">
                    <input type="text" 
                    placeholder="Enter author" 
                    name="author"
                    value={formData.author}
                    onChange={handleInput}
                    required
                    />
                </div>

                <textarea name="review" onChange={handleInput} value={formData.review}></textarea>

                <div className="form_element">
                    <input type="number"
                     placeholder="Enter pages" 
                     name="pages"
                     value={formData.pages}
                     onChange={handleInput}
                     required
                     />
                </div>

                <div className="form_element">
                    <select name="rating" value={formData.rating} onChange={handleInput}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="form_element">
                    <input 
                    type="number" 
                     placeholder="Enter price" 
                     name="price"
                     value={formData.price}
                     onChange={handleInput}
                     />
                </div>

                <button type="submit">Add Review</button>
            </form>
{/* 
            {
               book ? 
               <div className="conf_link">
                  <Link to={`/books/${book._id}`}>Click here to view the book</Link>
                </div>
                : null
               } */}
        </div>
    )
}

export default AddBookComponent;
