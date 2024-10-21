import React, { createContext } from "react";
export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) =>
      console.log("User created successfully: ", result.user)
    );
  };

  const authInfo = {
    registerUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
