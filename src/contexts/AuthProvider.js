import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
      
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubcribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unSubcribe();
        }
    }
    ,[])

    const authInfo = {user, createUser,signIn ,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;