import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";


import Leads from "../Leads/Leads";



const LayoutLeads=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            
            <Leads className="leads"></Leads>
            
            
            
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutLeads;