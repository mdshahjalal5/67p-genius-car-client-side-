import React, {  useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, AuthContext as AuthText } from '../firebase/firebase.init';
const AuthProvider = ({children}) => {

    const [preLaoding, setpreLaoding] = useState(true)
    const [user, setUser] = useState(null)
    // 1 createUser
    function signUp(mail, pass){
        return  createUserWithEmailAndPassword(auth, mail, pass)        
    }
    const login = (mail, pass) =>{
        return signInWithEmailAndPassword(auth, mail,  pass);
    }
    const authInfo = {
        signUp, 
        user,         
        login,
    }
    useEffect(function named(){
        
          const unsubscribe =  onAuthStateChanged(auth, function anonymous(user){
                console.log(user, 'auth user');
                setUser(user)
            })
        return () => unsubscribe();
    }, [])
    return <AuthText.Provider value={authInfo}>
        {children}
    </AuthText.Provider>
};

export default AuthProvider;