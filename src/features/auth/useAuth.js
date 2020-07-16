import { useContext } from 'react';
import { AuthContext } from './Authenticator';

export const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};
