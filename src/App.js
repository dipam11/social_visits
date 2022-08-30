import React from "react";
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Users />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
