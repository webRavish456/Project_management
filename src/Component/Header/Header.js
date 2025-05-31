import React, { useState } from "react";
import {
  AppBar, Box, Toolbar, IconButton, Typography,
  Menu, Avatar, Tooltip, MenuItem,
  TableContainer
} from "@mui/material";
import { useLocation,useNavigate } from "react-router-dom";


const Header = () => {


  const location = useLocation();
  const navigate = useNavigate();

  const Profilephoto = JSON.parse(localStorage.getItem("profilePhoto")) || null

  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["My Profile", "Logout"];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "My Profile") {
      navigate("/profile");
    } else if (setting === "Logout") {
      
      localStorage.clear();
      navigate("/login");
    }
  };

  
  const getHeadingFromPath = () => {
    const path = location.pathname;

    if (path.includes("/project")) return "Project";
    if (path.includes("/task")) return "Task";
    if (path.includes("/leads")) return "Leads";
    if (path.includes("/client")) return "Client";
    if (path.includes("/finance")) return "Finance";
    if (path.includes("/dashboard")) return "Dashboard";
    if (path.includes("/meetingschedule")) return "Meeting Schedule";
    if (path.includes("/profile"))return"Profile";

  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#ffffff", height: "60px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Dynamic Heading Here */}
        <Typography variant="h6" sx={{ color: "#333" }}>
          {getHeadingFromPath()}
        </Typography>
        
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="profile" src={Profilephoto} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElUser)}
            onClose={() => handleCloseUserMenu()}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                <Typography sx={{textAlign:"center"}}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;