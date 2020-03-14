import React from 'react'
import HeaderContainer from '../header/header.container'

const Layout = (props) => {
    return (
        <div>
            <HeaderContainer />
                <div>
                    {props.children}
                </div>
        </div>
    )
}

export default Layout;
