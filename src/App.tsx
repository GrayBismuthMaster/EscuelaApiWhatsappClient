import './App.css'
//Index pages
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";

import ProtectedRoutes from './ProtectedRoutes'
function App() {
  return (
    <>
      <Router> 
              {/* PUBLIC ROUTES */}
        
                <Routes>
                <Route path="/" element={<Login />}/>
                {/* PRIVATE ROUTES */}
                <Route element={<ProtectedRoutes/>}>  
                      {/* <Route exact path="/home" element={<Home/>}/> */}
                    
                </Route>
                    
                
                </Routes>
      </Router>
    </>
  );
}

export default App
