import React from 'react';
import { connect } from "react-redux";
import { isAuth } from '../actions/user.action';

const AuthHOC = (ComposedComp,loadPage) => {
    
     function Authenticate (props) {
            const dispatch = props.dispatch
            const [loading,setLoading] = React.useState(true);

            React.useEffect(() => {
                dispatch(isAuth())
            },[dispatch])

            React.useEffect(() => {
                if(Object.entries(props.user).length){
                    setLoading(false)
                    if(!props.user.userdata.isAuth)
                        {
                            if(loadPage === true)
                                props.history.push('/login')
                        }
                    else
                        if(loadPage === false){ props.history.push('/')}
            }   
            },[props.user,props.history])

            if(loading)
                return <div className="loader">Loading...</div>

            else
               return <ComposedComp {...props} />
        }

    function mapStateToProps (state) { return {user : state.userReducer} }

     return connect(mapStateToProps)(Authenticate);

}


export default AuthHOC