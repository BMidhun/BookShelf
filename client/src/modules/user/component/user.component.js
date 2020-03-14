import React from 'react'

const UserComponent = ({user}) => {

    const User = user.userdata.data
 
    return (
        <div className="user_container">
            <div className="avatar">
                <img src="/images/avatar.png" alt="avatar"/>
            </div>
            <div className="nfo">
                <div><span>Name:</span>{User.firstname} {User.lastname}</div>
                <div><span>Email:</span>{User.email}</div>

            </div>
        </div>
    )
}

export default UserComponent;
