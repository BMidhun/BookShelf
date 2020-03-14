import React from 'react'
import { connect } from "react-redux";
import { getUserPosts } from '../../../actions/user.action';
import UserPostComponent from '../component/userpost.component';

const UserPostContainer = ({user,userState,dispatch}) => {


    React.useEffect(() => {
        dispatch(getUserPosts(user.userdata.data._id));
    },[dispatch,user])

    return (
        <UserPostComponent posts = {userState.userposts}/>
    )
}

const mapStateToProps = (state) => ({userState : state.userReducer} )

export default connect(mapStateToProps)(UserPostContainer);
