import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./containers/login";
import Landing from "./containers/landing";
import Viewticket from "./containers/viewticket/viewticket";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          // <ProtectRoute>
          <Landing />
          // </ProtectRoute>
        }
      />
      <Route path="/ticket/:id" element={<Viewticket />}/>
      {/* <Route path="*" element={<ProtectRoute><PageNotFoundScreen /></ProtectRoute>} /> */}
    </Routes>
  );
}

export default App;
