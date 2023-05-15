import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "../context/AccountContext";

export default function RequireAuth({ children }) {
  const { account } = useContext(AccountContext);
  const location = useLocation();

  if (!account) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
}
