import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
