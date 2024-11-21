import PropTypes from "prop-types";
import { createContext, useEffect, useRef, useState } from "react"
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();


function AuthProviders({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const emailRef = useRef();


    const handelLoginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider);
    }
    const handelRegister = (email, password) => {
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }
    const handelLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handelResetPasswordWithEmail = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    const updateProfileInfo = (name,photo) => {
        return updateProfile(auth.currentUser, {displayName:name, photoURL:photo})
        .then(() => {
            setUser((prevUser) => ({
                ...prevUser,
                displayName: name,
                photoURL: photo,
            }));
        })
        .catch((error) => {
            throw error;
        });
    }
    const handelLogOut = () => {
        setUser(null);
        return signOut(auth);
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }else{
                setUser(null);
                setLoading(false)
            }
        });
        return () => {
            unsubscribe();
        }

    } ,[])


    const authInfo = {
       user,
       loading,
       emailRef,
       handelLoginWithGoogle,
       handelRegister,
       handelLogin,
       handelLogOut,
       updateProfileInfo,
       handelResetPasswordWithEmail
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