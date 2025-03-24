import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Clients from "../Clients/Clients";

const Client=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Clients className="Dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default Client;