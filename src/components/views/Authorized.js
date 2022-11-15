import { Navigate, useLocation } from "react-router-dom";

export const Authorized = ({ children }) => {
  const location = useLocation();

  if (localStorage.getItem("capstone_user")) {
    return children;
  } else {
    return (
      <Navigate to={`/login/${location.search}`} replace state={{ location }} />
    );
  }
};
