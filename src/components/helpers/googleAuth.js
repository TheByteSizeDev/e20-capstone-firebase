import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// NOTES!
// googleAuth.signIn() --- 0 params
// googleAuth.signOut() --- 0 params

// SignIn brings up the google sign in pop up AND works
// for both signing in AND registering a user

// SignOut just signs out. This will work for both google
// and email/password sign out.

export const googleAuth = {
  // Works to sign in AND register a user
  signInRegister: function(navigate) {
    return new Promise((res) => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((userCredential) => {
          const userAuth = {
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            uid: userCredential.user.uid,
            type: "google",
          };
          localStorage.setItem("project_user", JSON.stringify(userAuth));
          navigate("/");
          console.log("you did it");
        })
        .catch((error) => {
          console.log("Google Sign In Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
          console.log("error email", error.email);
        });
    });
  },
  // Sign out a user
  signOut: function(navigate) {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("project_user");
        navigate("/");
        console.log("Sign Out Success!");
      })
      .catch((error) => {
        console.log("Google SignOut Error");
        console.log("error code", error.code);
        console.log("error message", error.message);
      });
  },
};
