import * as firebase from 'firebase/app';
import React from 'react';

export const LoginButton = () => {
  return (
    <button
      onClick={() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }}
    >
      Log In
    </button>
  );
};
