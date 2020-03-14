import React from 'react'
import {Route} from 'react-router-dom'
import Layout from './modules/hoc/layout.component'
import HomeContainer from './modules/home/container/home.container'
import BookViewContainer from './modules/book/container/book.container'
import loginContainer from './modules/login/container/login.container'
import AuthHOC from './modules/auth.hoc'
import UserComponent from './modules/user/component/user.component'
import AddBookContainer from './modules/review/container/addbook.container'
import UserPostContainer from './modules/userposts/container/userpost.container'
import EditBookContainer from './modules/review/container/editbook.container'
import UserRegisterContainer from './modules/user/container/userregister.container'
import Logout from './modules/logout/logout'

const Routes = () => {
    return (
        <Layout>
            <Route path="/" exact component={AuthHOC(HomeContainer,null)}/>
            <Route path = "/books/:id" exact  component={AuthHOC(BookViewContainer,null)} />  
            <Route path="/user" exact component={AuthHOC(UserComponent,true)} />
            <Route path="/user/register" exact component={AuthHOC(UserRegisterContainer,false)} />
            <Route path="/user/add" exact component={AuthHOC(AddBookContainer,true)} />
            <Route path="/user/edit-post/:id" exact component={AuthHOC(EditBookContainer,true)} />
            <Route path="/user/posts" exact component={AuthHOC(UserPostContainer,true)} />
            <Route path="/user/logout" exact component={AuthHOC(Logout,true)} />
            <Route path = "/login" exact component={AuthHOC(loginContainer,false)} />
        </Layout>
    )
}

export default Routes;
