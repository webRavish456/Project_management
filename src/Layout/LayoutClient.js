import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";


import Client from "../Client/Client";



const LayoutClient=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            
            <Client className="client" />
            
            
            
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutClient;