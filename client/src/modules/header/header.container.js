import React from 'react'
import FontAwesome from "react-fontawesome";
import {Link} from 'react-router-dom'
import SideNavComp from './header.component';
const HeaderContainer = () => {

    const[showSideNav,setShowSideNav] = React.useState(false);

    return (
        <header>
            <div className="open_nav">
                <FontAwesome 
                name ="bars"
                style = {{
                    color : '#ffffff',
                    padding:'10px',
                    cursor : 'pointer'
                }}
                onClick = {() => {setShowSideNav(true)}}
                />
            </div>

            <SideNavComp
                showNav = {showSideNav}
                onHideNav = {() => {setShowSideNav(false)}}
             />

            <Link to="/" className="logo">
                Book Review Portal
            </Link>
        </header>
    )
}

export default HeaderContainer;
