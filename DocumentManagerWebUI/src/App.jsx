import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Student from "./pages/Student";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { isAuth, role } = useSelector((state) => state.account);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/signin" />}
        />
        <Route path="/student" element={role === "student" && <Student />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
