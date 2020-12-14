import React from 'react'

function NavbarItemText({render, ...props}){

    if(render){
        return(
            <h6 style={{color: "white"}}>{props.label}</h6>
        )
    }else{
        return false;
    }
    
}

export default NavbarItemText