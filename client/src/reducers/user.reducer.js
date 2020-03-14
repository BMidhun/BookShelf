export default function (state={},action) {

    switch(action.type){
        case "USER_LOGIN" : return {...state, userdata:action.payload}
        case "IS_AUTH" : return {...state, userdata:action.payload}
        case "GET_USERPOSTS" : return {...state,userposts:action.payload}
        case "GET_ALL_USERS" : return {...state,usersList:action.payload}
        case "ADD_USER" : return {...state,isUserAdded:action.payload}
        default : return state
    }

}