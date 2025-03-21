import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Project from "../Project/Project";



<<<<<<< HEAD

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
=======
const Layoutproject=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Project className="project"/>
            
            
            
            
            </div>
        </div>
        </div>


        </>
    )
}

export default Layoutproject;
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7
