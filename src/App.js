import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutProject from "./Layout/LayoutProject";
import LayoutLeads from "./Layout/LayoutLeads";
import LayoutTask from "./Layout/LayoutTask";
import LayoutClient from "./Layout/LayoutClient";
import LayoutFinance from "./Layout/LayoutFinance";
import LayoutMeetingScheduled from "./Layout/LayoutMeetingScheduled";





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
        
        <Route path="/client" element={<LayoutClient/>}/>
        <Route path="/finance" element={<LayoutFinance/>}/>
        <Route path="meetingscheduled" element={<LayoutMeetingScheduled/>}/>
        
    
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;