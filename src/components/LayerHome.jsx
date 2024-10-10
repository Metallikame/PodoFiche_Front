import React from 'react';
import Footer from "./Footer.jsx"
import {Outlet} from "react-router-dom"

const LayerHome = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LayerHome