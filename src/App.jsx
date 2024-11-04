import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Creat from "./components/Creat";

function App() {
  return (
    <div className="h-screen w-full flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Creat/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
