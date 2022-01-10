import React from 'react'
import Header from '../components/Header/header'
import './mainLayout.css'
import LeftBar from '../components/LeftBar/LeftBar'
import Navigation from '../components/NavLink/NavLink'

export default function MainLayout(props) {
    return <div className='mainLayout'>
        <Header />
        <div className='mlBody'>
            <div className='leftBar'>
                <LeftBar className='leftBar' />
            </div>
            <div className='children'>
                <div className='topNav'><Navigation/></div>
                {
                    props.children
                }
            </div>
        </div>
    </div>
}