import * as firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';

// firebaseコンソールからコピペ
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
      // ログインできた・できなかったに関わらず、初回読み込み時に必ず呼ばれる
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
