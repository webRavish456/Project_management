<<<<<<< HEAD
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Task from "../Task/Task";
=======
import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Task from "../Task/task";


>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7

const LayoutTask=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
<<<<<<< HEAD
            <Task className="dashboard" />
=======
            <Task className="task"/>
            
            
            
            
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutTask;