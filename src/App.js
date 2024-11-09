import "./App.css";
import { Route} from "react-router-dom";
import { Routes} from "react-router-dom";
import { useState} from "react";

import Login from "./components/core/Login";
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/core/PrivateRoute";
import SignUp from "./components/core/SignUp";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Preorder from "./pages/Preorder";
import Contact from "./pages/Contact";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element= {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element= {<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element= {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
        <Route path="/preorder" element= {<Preorder/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/about" element= {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;