import "./App.css";
import "./Home.css";
import React, {Component} from "react";
import { Route, Routes} from "react-router";
import Account from "./Account";
import Home from "./Home";
import Test from "./Test";
import Sidebar from "./Sidebar";


export default function App(){
  return(
  <div class="whole"> 
    <Sidebar />
    <div className="newdiv">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/test" element={<Test />} />
    </Routes>
    </div>
  </div>
  );
}

