import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("on inside the user", loggedUser)
            setUser(loggedUser)
            setLoader(false)
            return () => {
                unsubscribe()
            }

        })

    }, [])

    console.log(user)
    const logOut = () => {
        return signOut(auth)
    }
    const myAuth = () => {
        return auth
    }

    const createLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const createSignUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const authInfo = {
        user,
        createSignUp,
        createLogin,
        logOut,
        myAuth,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;