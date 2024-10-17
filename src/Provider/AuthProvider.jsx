import React, { createContext, useEffect, useState } from 'react';
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const provide = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    

    const google =()=>{
        setUser(true)
        return signInWithPopup(auth, provider)
    }
    const gitHub =()=>{
        setUser(true)
        return signInWithPopup(auth, provide)
    }
    
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = ()=>{
        setLoading(true)
        return signOut(auth)

    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside', loggedUser);
            setUser(loggedUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        gitHub,
        google,
        signIn,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;