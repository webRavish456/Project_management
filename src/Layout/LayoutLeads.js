import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Leads from "../Leads/Leads";

const Lead=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Leads className="dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default Lead;