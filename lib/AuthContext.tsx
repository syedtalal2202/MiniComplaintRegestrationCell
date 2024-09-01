






import React, { useState, useEffect, useContext, createContext } from "react";
import { getAuth, onAuthStateChanged, signOut as signout, User } from "firebase/auth";
import { setCookie, destroyCookie } from "nookies";
import { auth } from '../components/firebase'; // Ensure this import matches your setup
// import { useRouter } from 'next/router'
type Props = {
  children: React.ReactNode;
};

type UserContext = {
  user: User | null;  // Use User type here
  loading: boolean;
};

const AuthContext = createContext<UserContext | undefined>(undefined);

export default function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setCookie(null, "idToken", token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        
        setUser(user);  // Use user directly
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);
  
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
// const router = useRouter();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};

export const signOut = async () => {

  destroyCookie(null, "idToken");
  await signout(auth);
  // router.push('/');
};
