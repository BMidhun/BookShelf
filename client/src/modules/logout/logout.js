import React from 'react'
import Axios from 'axios'
import { ServerURL } from '../../constants/constants'
import { connect } from "react-redux";
import SessionStorage from '../../utils/localStorage';
const Logout = ({userState,history}) => {
   
    let token = userState.userdata.data.token

    React.useEffect(() => {
        Axios.get(`${ServerURL}/user/logout?token=${token}`)
        .then(res=>{
            if(res.data.success)
                setTimeout(() => {
                    SessionStorage.remove();
                    history.push('/')
                })
        })
    },[token,history])
    return (
        <div className="logout_container">
            <h1>Logging Out...</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({userState:state.userReducer}) 

export default connect(mapStateToProps)(Logout);
