import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Finance from "../Finance/Finance";



const LayoutFinance=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Finance className="finance"/>
            
            
            
            
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutFinance