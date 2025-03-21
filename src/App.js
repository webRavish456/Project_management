import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutProject from "./Layout/LayoutProject";
import LayoutLeads from "./Layout/LayoutLeads";
import LayoutTask from "./Layout/LayoutTask";

import LayoutClient from "./Layout/LayoutClient";
import LayoutFinance from "./Layout/LayoutFinance";
import LayoutMeetingSchedul from "./Layout/LayoutMeetingSchedule";
import { Dialog } from "@mui/material";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
        <Route path="/project" element={<LayoutProject />}/>
        <Route path="/leads" element={<LayoutLeads/>}/>
        <Route path="/task" element={<LayoutTask/>}/>
        <Route path="/meetingschdule" element={<LayoutMeetingSchedul/>}/>
        <Route path="/client" element={<LayoutClient/>}/>
        <Route path="/finance" element={<LayoutFinance/>}/>
        
    
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;