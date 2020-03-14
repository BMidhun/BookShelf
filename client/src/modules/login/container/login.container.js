import React from 'react'
import {connect} from 'react-redux'
import LoginComponent from '../component/login.component'
import { LoginUser } from '../../../actions/user.action'
import SessionStorage from '../../../utils/localStorage'

const LoginContainer = ({dispatch,userState,history}) => {

    const [form,setForm] = React.useState({
        email : '',
        password : '',
        error : '',
        success :''
    })

    const handleInput = (event) => {
        const data = {[event.target.name] : event.target.value}
        setForm(prev =>  ({...prev,...data}) )
    }

    const submitForm = (event) => {
        event.preventDefault();
        dispatch(LoginUser(form.email,form.password))
    }

    React.useEffect(() => {
        if(userState.userdata){

            if(userState.userdata.isAuth){
                SessionStorage.set(userState.userdata.data.token);
                history.push('/user');
            }
            if(!userState.userdata.isAuth){
                setForm(prev=> ({...prev,error:userState.userdata.data}) )
            }
        }
     
    },[history,userState.userdata])

    return (
        <LoginComponent  submitForm = {submitForm} form = {form} handleInput = {handleInput}/>
    )
}

const mapStateToProps = (state) =>( {userState : state.userReducer})

export default connect(mapStateToProps,null)(LoginContainer);
