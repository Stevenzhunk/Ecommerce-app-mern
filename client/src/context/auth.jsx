import { useState, useContext, useEffect, createContext } from 'react';
import axios from 'axios';
const AuthContext = createContext();
/*eslint-disable*/
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  });
  axios.defaults.headers.common['Authorization'] = auth?.token;
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const paseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: paseData.user,
        token: paseData.token,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
//custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
