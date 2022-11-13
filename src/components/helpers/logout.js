import { googleAuth } from "./googleAuth";
import { emailAuth } from "./emailAuth";

export const logout = {
  logout: function(navigate) {
    const userRecord = JSON.parse(localStorage.getItem("project_user"));
    if (userRecord.type === "google") {
      googleAuth.signOut(navigate);
    } else if (userRecord.type === "email") {
      emailAuth.signOut(navigate);
    }
  },
};
