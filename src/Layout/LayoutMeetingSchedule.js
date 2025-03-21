import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";





const LayoutMeetingSchedule=()=>
{
    return (
        <>
          <div className="layout">
          <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            
           
            
            
            
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutMeetingSchedule;