import * as firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';

// get from firebase console
var firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

interface IProps {
  children: React.ReactNode;
}

interface AuthContext {
  user: firebase.User | null;
  isLoading: boolean;
}

const initialData = {
  user: null,
  isLoading: true,
};

export const AuthContext = React.createContext<AuthContext>(initialData);

export const Authenticator: React.FC<IProps> = (props) => {
  const { children } = props;
  const [authData, setAuthData] = useState<AuthContext>(initialData);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // Called for the first/every time regardless of login success or failure
      setAuthData({
        user,
        isLoading: false,
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
