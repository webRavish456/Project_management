import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutProject from "./Layout/LayoutProject";
import LayoutTask from "./Layout/LayoutTask";




function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
        <Route path="/project" element={<LayoutProject />}/>
        <Route path="/Task" element={<LayoutTask />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;