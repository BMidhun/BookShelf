import React from 'react'
import {connect} from 'react-redux'
import UserRegisterComponent from '../component/userregister.component';
import { getAllUsers, PostUser } from '../../../actions/user.action';

const AdminRegisterContainer = ({userState,dispatch,history}) => {


    const [formData, setFormData] = React.useState({
        firstname : '',
        lastname : '',
        email:'',
        password:'',
        username : '',
        error : ''
    })

    React.useEffect(()=> {
        dispatch(getAllUsers());
    },[dispatch])

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(prev => ({...prev,[name]:value,error:''}));
    }

    const submitForm = (event) => {
        event.preventDefault();
        const user = {
            firstname : formData.firstname,
            lastname : formData.lastname,
            email:formData.email,
            password:formData.password,
            username : formData.username
        }
        dispatch(PostUser(user,userState.usersList));
    }

    React.useEffect(() => {
        if(userState.isUserAdded) {
            history.push('/login')
        }
        else if(userState.isUserAdded === false) {
            setFormData(prev=> ({...prev,error:'Error! User not Added'}))
        }
    },[userState.isUserAdded,history])

    return (
        <div>
            <UserRegisterComponent 
            formData = {formData}
            usersList = {userState.usersList}
            submitForm = {submitForm}
            handleInput = {handleInput}
            />
        </div>
    )
}


const mapStateToProps = (state) => ({userState : state.userReducer})

export default connect(mapStateToProps)(AdminRegisterContainer);
