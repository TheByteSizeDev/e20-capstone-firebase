import { emailAuth } from "../helpers/emailAuth";
import { googleAuth } from "../helpers/googleAuth";
import { useNavigate } from "react-router-dom";

export const ApplicationViews = () => {
  let navigate = useNavigate();
  // const localProjectUser = localStorage.getItem("project_user");
  // const projectUserObject = JSON.parse(localProjectUser);

  const onLogout = () => {
    const userRecord = JSON.parse(localStorage.getItem("project_user"));
    if (userRecord.type === "google") {
      googleAuth.signOut(navigate);
    } else if (userRecord.type === "email") {
      emailAuth.signOut(navigate);
    }
  };

  return (
    <>
      <h1>A Blank Page!!</h1>
      <button type="submit" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};
