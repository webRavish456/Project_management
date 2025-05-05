import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutMain from "./Layout/LayoutMain";
import Project from "./Project/Project";
import Leads from "./Leads/Leads";
import Task from "./Task/task";
import Client from "./Client/Client";
import Finance from "./Finance/Finance";

import { Dialog } from "@mui/material";
import Dashboard from "./Dashboard/Dashboard";
import MeetingSchedule from "./MeetingSchedule/MeetingSchedule";

import Header from "./Component/Header/Header";
import Profile from "./Profile/Profile";
//import Profile from "./Pages/Profile/Profile";



function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/header" element={<Header />}/>

        <Route path="/login" element={<SignIn />}/>
        <Route path="/forgot" element={<Forgot />}/>

        <Route path="/" element={<LayoutMain/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="leads" element={<Leads/>}/>
        <Route path="task" element={<Task/>}/>
        <Route path="meetingschedule" element={<MeetingSchedule/>}/>
        <Route path="client" element={<Client/>}/>
        <Route path="finance" element={<Finance/>}/>
        <Route path="profile" element={<Profile/>}/>

      </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;