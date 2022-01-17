import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import './NavLink.css'
import { FaPizzaSlice } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';
import { GiNoodles } from 'react-icons/gi';
import { FiHome } from 'react-icons/fi';

export default function Navigation() {
  return (
    <React.Fragment>
        <div className='navRoot'>
            <NavLink className='navLinkText' to="/">
            <FiHome/>.  Home
            </NavLink>
            <NavLink className='navLinkText' to="/pizza">
            <FaPizzaSlice/>.  Pizza 
            </NavLink>
            <NavLink className='navLinkText' to="/dessert">
            <GiCakeSlice/>.  Dessert 
            </NavLink>
            <NavLink className='navLinkText' to="/noodle">
            <GiNoodles/>.  Noodle 
            </NavLink>
        </div>
    </React.Fragment>
  );
};

