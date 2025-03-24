import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import MeetingSchedule from "../MeetingSchedule/MeetingSchedule";

const LayoutSchedule=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <MeetingSchedule className="Dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutSchedule;