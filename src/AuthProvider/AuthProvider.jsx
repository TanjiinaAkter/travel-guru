import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  //=============  register user  =====================
  const userSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // =====================  login user   =====================
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  =====================  user observer   =====================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // ===================== RESET PASSWORD  =====================

  const resetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };
  //====================== USER LOGOUT  ========================
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };
  const googleProvider = new GoogleAuthProvider();
  //===================================================
  const google = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  //===================================================
  const authInfo = { user, userSignUp, login, resetPassword, logout, google, loader };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
