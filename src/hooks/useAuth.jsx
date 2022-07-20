import { useContext } from 'react';
import { AuthContext } from '../context';

export const useAuth = (setterOnly) => {
  const { token, setToken } = useContext(AuthContext);

  return setterOnly ? [setToken] : [token, setToken];
};
