import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react"
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();


function AuthProviders({ children }) {
    const [user, setUser] = useState(null);
    console.log(user)

    const handelLoginWithGoogle = () => {
        return signInWithPopup(auth,GoogleProvider);
    }
    const handelRegister = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }
    const handelLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handelLogOut = () => {
        return signOut(auth);
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
            }else{
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
        }

    } ,[])


    const authInfo = {
       user,
       handelLoginWithGoogle,
       handelRegister,
       handelLogin,
       handelLogOut,
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