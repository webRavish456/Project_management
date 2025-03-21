import React from "react"
<<<<<<< HEAD
import Menuitems from "../Menuitems/Menuitem";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "@mui/material";
=======

import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "@mui/material";
import Menuitems from "../Menuitems/Menuitem";
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7

const Sidebar=()=>
{
   
  const isSmScreen = useMediaQuery("(max-width:768px)");
    

    return (
        <>
            
           <div className="sidebar">

<<<<<<< HEAD
           <LazyLoadImage 
              src={"/logo.png"} 
              alt="logo"
              width={80} 
              height={47} 
              //style={{ filter: "brightness(0) invert(1)" }}

            />


      {Menuitems.map((item, index) => (
=======
           <LazyLoadImage  src={"/LOGO.png"}  alt="logo" width={200}   height={50}  />

         {Menuitems.map((item, index) => (
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7
        <div className="menu-item" key={index}>
          <NavLink to={item.href} className="menu-link">
            <LazyLoadImage 
              src={item.icon} 
              alt={item.label} 
<<<<<<< HEAD
              width={20} 
              height={20} 
               style={{ filter: "brightness(0) invert(1)" }}
=======
              width={20}  
              height={20} 
              //style={{ filter: "brightness(0) invert(1)" }}
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7
            />
          {isSmScreen?null:  <span className="menu-label">{item.label}</span>}
          </NavLink>
        </div>
      ))}
    </div>
        </>
    )
}

export default Sidebar;