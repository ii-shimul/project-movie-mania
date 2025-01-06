import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const createUser = async (email, password, name = null, photoURL = null) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDetails = userCred.user;

      await updateProfile(userDetails, {
        displayName: name,
        photoURL: photoURL,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateProfileInfo = (name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const logInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // fetching movies
  useEffect(() => {
    fetch("https://movie-mania-server-drab.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    logInGoogle,
    updateProfileInfo,
    loading,
    resetPassword,
    movies,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
