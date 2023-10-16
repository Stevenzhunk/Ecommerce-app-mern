import Layout from '../../components/Layout';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [answer, setAnswer] = useState('');

  const myHost = import.meta.env.VITE_REACT_APP_API;
  const haddleSumit = async (e) => {
    e.preventDefault();
    console.log('datos enviados');

    try {
      const res = await axios.post(`${myHost}/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        console.log(res.data.message);

        setTimeout(() => {
          navigate(location.state || '/login');
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
      <Layout title="Forgot Password- Ecommerce APP">
        <div className="form-container">
          <form onSubmit={haddleSumit}>
            <h4 className="title">Recovery Password</h4>
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
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                placeholder="Enter Your Secret Answer"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default ForgotPassword;
