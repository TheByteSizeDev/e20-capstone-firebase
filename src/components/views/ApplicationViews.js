import { useNavigate } from "react-router-dom";
import { PhotoUpload } from "../photoStorage/PhotoUpload";
import { logout } from "../helpers/logout";

export const ApplicationViews = () => {
  let navigate = useNavigate();

  // Move this to where ever you end up putting your logout button
  const onLogout = () => {
    logout.logout(navigate);
  };

  return (
    <>
      <h1>A Blank Page!!</h1>
      {/* logout button */}
      <button type="submit" onClick={onLogout}>
        Logout
      </button>
      {/* move this component to where you want your PhotoUpload */}
      <PhotoUpload />
    </>
  );
};
