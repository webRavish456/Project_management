import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Project from "../Project/Project";




const LayoutProject=()=> 
    {
    return (
        <>
            <div className="layout">
                <div className="main-container">
                    <Sidebar />
                    <div className="content">
                        <Header className="header" />
                        
                        <Project className="Dashboard" />
                        
                    </div>
                </div>
            </div>


        </>
    );
}

export default LayoutProject ;