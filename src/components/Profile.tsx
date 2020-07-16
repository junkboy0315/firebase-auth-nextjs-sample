import React from 'react';
import { useAuth } from '../features/auth/useAuth';

export const Profile = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>loading profiles...</div>;
  }

  return user ? (
    <div>
      <img src={user.photoURL!} alt={user.displayName!} />
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <p>{JSON.stringify(user)}</p>
    </div>
  ) : (
    <div>not authenticated</div>
  );
};
