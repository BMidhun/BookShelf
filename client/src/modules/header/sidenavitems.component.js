import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import items from './constants/sidenavlinks'
import { connect } from "react-redux";

function SideNavItems({user}) {

    const [LinkItems,setLinkItems] = React.useState('');

    React.useEffect(() => {

        if(user.userdata){
            if(user.userdata.isAuth)
                setLinkItems(items.filter(data => data.restricted !== false))
            else
                setLinkItems(items.filter(data=> data.restricted !==true))
        }

    },[user.userdata])

    const renderNavItems = () => {
        return  LinkItems ? LinkItems.map((item,index) => {
                return <div key={index} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
            </div> 
             }) : null
    }

    return (
        <>
        
            {renderNavItems()}
        
        </>
    )
}

const mapStateToProps = (state) => ({user:state.userReducer}) 

export default connect(mapStateToProps)(SideNavItems);
