import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from './Components/Header/TopHeader'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import MidHeader from './Components/Header/MidHeader'



function Root() {

    
    return (
        <div>
            <TopHeader></TopHeader>
            <MidHeader></MidHeader>
            <Navbar ></Navbar>
         

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root
