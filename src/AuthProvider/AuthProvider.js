import React, { useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config.js";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const userLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateLoginProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut = () => {
    setLoading(true);
    localStorage.removeItem("user-token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (activeUser) => {
      setUser(activeUser);
      setLoading(false);
    });
    return () => {
      unsubscibe();
    };
  }, []);

  const authValue = {
    user,
    loading,
    userLogin,
    userLogOut,
    createUser,
    signIn,
    updateLoginProfile,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
