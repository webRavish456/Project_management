import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Task from "../Task/task";



const LayoutTask=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Task className="task"/>
            
            
            
            
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutTask;