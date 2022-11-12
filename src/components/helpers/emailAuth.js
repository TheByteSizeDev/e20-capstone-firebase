import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
  register: function(userObj) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        // change this if you want different user information
        const userAuth = {
          email: userCredential.user.email,
          displayName: userObj.displayName,
          uid: userCredential.user.uid,
        };
        localStorage.setItem("project_user", JSON.stringify(userAuth));
      })
      .catch((error) => {
        console.log("Email Register Error");
        console.log("error code", error.code);
        console.log("error message", error.message);
      });
  },
  // Sign in existing user
  signIn: function(userObj) {
    return new Promise((res) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, userObj.email, userObj.password)
        .then((userCredential) => {
          const userAuth = {
            email: userCredential.user.email,
            displayName: userObj.displayName,
            uid: userCredential.user.uid,
          };
          localStorage.setItem("project_user", JSON.stringify(userAuth));
        })
        .catch((error) => {
          console.log("Email SignIn Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
        });
    });
  },
  // Sign out
  signOut: function() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("project_user");
        console.log("Sign Out Success!");
      })
      .catch((error) => {
        console.log("signOut Error");
        console.log("error code", error.code);
        console.log("error message", error.message);
      });
  },
};
