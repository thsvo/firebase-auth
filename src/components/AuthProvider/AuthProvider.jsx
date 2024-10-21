import React, { createContext } from "react";
export const AuthContext = createContext(null);
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) =>
      console.log("User created successfully: ", result.user)
    );
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) =>
      console.log("User created successfully: ", result.user)
    );
  };

  const authInfo = {
    registerUser,
    loginUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
