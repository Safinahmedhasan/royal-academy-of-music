import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import axios from 'axios'
import { getRole } from '../Api/Auth'

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  // console.log(role);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if(user) {
      getRole(user.email).then(data=>setRole(data))
    }
  },[user])

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
    
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)

      // if(currentUser){
      //   axios.post('http://localhost:5000/jwt', {email: currentUser.email})
      //   .then(data => {
      //     localStorage.setItem('access-token', data.data.token)
      //   })
      // }
      // else{
      //   localStorage.removeItem('access-token') 
      // }

      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  // useEffect(() => {
  //   if(user?.email){
  //     fetch(`http://localhost:5000/users/${user?.email}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setRole(data.role);
  //     })
  //   }
  // },[user?.email])

  const authInfo = {
    user,
    loading,
    role,
    setLoading,
    setRole,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
