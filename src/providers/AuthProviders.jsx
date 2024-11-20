import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react"
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();


function AuthProviders({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handelLoginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider);
    }
    const handelRegister = (email, password) => {
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }
    const handelLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateProfileInfo = (name,photo) => {
        return updateProfile(auth.currentUser, {displayName:name, photoURL:photo})
    }
    const handelLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
            }else{
                setUser(null);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }

    } ,[])


    const authInfo = {
       user,
       loading,
       handelLoginWithGoogle,
       handelRegister,
       handelLogin,
       handelLogOut,
       updateProfileInfo
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProviders.propTypes = {
    children: PropTypes.node
}

export default AuthProviders