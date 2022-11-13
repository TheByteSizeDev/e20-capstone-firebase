import { emailAuth } from "../helpers/emailAuth";
import { googleAuth } from "../helpers/googleAuth";
import { useNavigate } from "react-router-dom";
import { PhotoUpload } from "../photoStorage/PhotoUpload";
import { logout } from "../helpers/logout";

export const ApplicationViews = () => {
  let navigate = useNavigate();

  const onLogout = () => {
    logout.logout(navigate);
  };

  return (
    <>
      <h1>A Blank Page!!</h1>
      <button type="submit" onClick={onLogout}>
        Logout
      </button>
      <PhotoUpload />
    </>
  );
};
