import React from 'react'
import { Link } from "react-router-dom";
import moment from "moment-js";
const UserPostComponent = ({posts}) => {

    const showUserPosts = () => {
       return posts.map(post => {
            return <tr key={post._id}>

                    <td><Link to={`/user/edit-post/${post._id}`}>{post.name}</Link></td>

                    <td>{post.author}</td>
                    <td>{moment(post.createdAt).format("MM-DD-YYYY")}</td>
                   </tr>
        })
    }

    return (
        <div className="user_posts">
            <h4>Your Books</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {posts ? showUserPosts() :null}
                </tbody>
            </table>
        </div>
    )
}

export default UserPostComponent;
