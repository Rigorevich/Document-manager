import React, { useState, useEffect, useRef } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Student from "./pages/Student";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import RequireAuth from "./hoc/RequireAuth";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AccountContext } from "./context/AccountContext";
import Employee from "./pages/Employee";
import TemplateEditor from "./pages/Employee/TemplateEditor";
import Applications from "./pages/Employee/Applications";

function App() {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (account !== JSON.parse(localStorage.getItem("user"))) {
      navigate(account.role);
    }
  }, [account]);

  return (
    ///employee/templates/create
    <>
      <AccountContext.Provider value={{ account, setAccount }}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={account ? account.role : "/signin"} />}
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/employee"
            element={
              <RequireAuth>
                <Employee />
              </RequireAuth>
            }
          />
          <Route
            path="/employee/applications"
            element={
              <RequireAuth>
                <Applications />
              </RequireAuth>
            }
          />
          <Route
            path="/employee/templates/create"
            element={
              <RequireAuth>
                <TemplateEditor />
              </RequireAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />
          <Route
            path="/student"
            element={
              <RequireAuth>
                <Student />
              </RequireAuth>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AccountContext.Provider>
    </>
  );
}

export default App;
