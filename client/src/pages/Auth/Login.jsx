import Layout from '../../components/Layout';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth();

  const myHost = import.meta.env.VITE_REACT_APP_API;
  const haddleSumit = async (e) => {
    e.preventDefault();
    console.log('datos enviados');

    try {
      const res = await axios.post(`${myHost}/api/v1/auth/LOGIN`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        console.log(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went Wrong');
    }
  };
  return (
    <div>
      <Layout title="Register - Ecommerce APP">
        <div className="form-container">
          <form onSubmit={haddleSumit}>
            <h4 className="title">LOGIN NOW</h4>
            <div className="mb-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <p className="dont-user-container">
            Dont have Account?,&nbsp;
            <NavLink className="nav-link dont-user" to="/register">
              Register Now
            </NavLink>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
