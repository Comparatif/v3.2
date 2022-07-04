import { createContext, useContext, useEffect, useState } from 'react'

import firebase from '../../firebase/firebase/clientApp'

const AuthContext = createContext<any>({})
const auth = firebase.auth()

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  console.log(user)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const sendPasswordReset = (email: string, actionCodeSettings) => {
    return auth.sendPasswordResetEmail(email, actionCodeSettings)
  }

  const confirmPasswordReset = (code: string, newPassword: string) => {
    return auth.confirmPasswordReset(code, newPassword)
  }

  const logout = async () => {
    setUser(null)
    await auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, sendPasswordReset, confirmPasswordReset }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
