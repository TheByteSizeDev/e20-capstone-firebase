import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// Notes!
// emailAuth.register() -- 1 param -- (full userObject)
// emailAuth.signIn() -- 1 param -- (full userObject)
// emailAuth.signOut() -- 0 param

// userObject expected ---->
// {
//   email: "",
//   password: "",
//   displayName: "",
// }

export const emailAuth = {
  // Register New User
  register: function(userObj, navigate) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        // change this if you want different user information
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: userObj.fullName,
        }).then(
          function() {
            const userAuth = {
              email: userCredential.user.email,
              displayName: userObj.fullName,
              uid: userCredential.user.uid,
              type: "email",
            };
            localStorage.setItem("project_user", JSON.stringify(userAuth));
            navigate("/");
          },
          function(error) {
            console.log("Email Register Name Error");
            console.log("error code", error.code);
            console.log("error message", error.message);
          }
        );
      })
      .catch((error) => {
        console.log("Email Register Error");
        console.log("error code", error.code);
        console.log("error message", error.message);
      });
  },
  // Sign in existing user
  signIn: function(userObj, navigate) {
    return new Promise((res) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, userObj.email, userObj.password)
        .then((userCredential) => {
          const userAuth = {
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            uid: userCredential.user.uid,
            type: "email",
          };
          localStorage.setItem("project_user", JSON.stringify(userAuth));
          navigate("/");
        })
        .catch((error) => {
          console.log("Email SignIn Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
        });
    });
  },
  // Sign out
  signOut: function(navigate) {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("project_user");
        navigate("/");
        console.log("Sign Out Success!");
      })
      .catch((error) => {
        console.log("signOut Error");
        console.log("error code", error.code);
        console.log("error message", error.message);
      });
  },
};
