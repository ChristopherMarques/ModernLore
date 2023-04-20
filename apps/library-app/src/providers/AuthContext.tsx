import React, { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import { firebase as firebaseClient } from "../services/firebaseClient";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import router from "next/router";

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: User | null;
  userLogin({ email, password }: ICredentials): void;
  userLogout(path: string): void;
}

const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const userLogin = async ({ email, password }: ICredentials) => {
    if (typeof window !== "undefined") {
      (window as any).nookies = nookies;
    }
    const { user } = await signInWithEmailAndPassword(
      firebaseClient.auth(),
      email,
      password
    );

    if (user) {
      const token = await user.getIdToken();

      setUser(user);
      nookies.destroy(null, "token");
      nookies.set(null, "token", token, { path: "/" });

      return user;
    }

    return null;
  };

  const userLogout = (path: string) => {
    firebaseClient
      .auth()
      .signOut()
      .then(() => router.push(path));
  };

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (user: any) => {
      const token = user && (await user.getIdToken());

      if (!token) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        setUser(user);
        nookies.set(undefined, "token", token, { path: "/" });
      }
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
