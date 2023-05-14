import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Student from "./pages/Student";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/signin" />}
        />
        <Route path="/student" element={<Student />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
