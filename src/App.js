import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutProject from "./Layout/LayoutProject";
import LayoutTask from "./Layout/LayoutTask";
import LayoutSchedule from "./Layout/LayoutSchedule";
import LayoutClients from "./Layout/LayoutClients";
import LayoutLeads from "./Layout/LayoutLeads";
import LayoutFinance from "./Layout/LayoutFinance";




function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
        <Route path="/projects" element={<LayoutProject/>}/>
        <Route path="/task" element={<LayoutTask/>}/>
        <Route path="/meeting-schedule" element={<LayoutSchedule/>}/>
        <Route path="/clients" element={<LayoutClients/>}/>
        <Route path="/leads" element={<LayoutLeads/>}/>
        <Route path="/finance" element={<LayoutFinance/>}/>
        

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;