import * as firebase from 'firebase/app';
import React from 'react';

export const LogoutButon = () => {
  return (
    <button
      onClick={() => {
        firebase.auth().signOut();
      }}
    >
      Log Out
    </button>
  );
};
