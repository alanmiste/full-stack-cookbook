import React from "react";
import './header.css'
// 'import Button from '../Button/button''
import { NavLink } from "react-router-dom";

export default function Header(){

    const LoginButton =({btnname})=>{
        return(
            <button>{btnname}</button>
        )
    }

    return(
        <div className="header">
           {/* <LoginButton className='loginBtn' btnname={'Login'} /> */}
           <React.Fragment>
        
            <NavLink className='loginBtn' to="/loginPage">
              Login
            </NavLink>
           
            </React.Fragment>
        </div>
    )
}