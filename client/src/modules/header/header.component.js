import React from 'react'
import SideNav from "react-simple-sidenav";
import SideNavItems from './sidenavitems.component';

const SideNavComp = (props) => {
    return (
        <SideNav
            showNav={props.showNav}
            onHideNav = {() => props.onHideNav()}
            navStyle = {{
                background :'#333',
                maxWidth : '250px',
            }}
        >
            <SideNavItems />
        </SideNav>
    )
}

export default SideNavComp;
