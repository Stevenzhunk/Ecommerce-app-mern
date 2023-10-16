import Layout from '../../components/Layout';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [answer, setAnswer] = useState('');
  const myHost = import.meta.env.VITE_REACT_APP_API;
  const haddleSumit = async (e) => {
    e.preventDefault();
    console.log('datos enviados');

    try {
      const res = await axios.post(`${myHost}/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        console.log(res.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
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
            <h4 className="title">REGISTER NOW</h4>
            <div className="mb-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter Your Name"
                required
              />
            </div>
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
            <div className="mb-3">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputAddress"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-3">
              Select secret Question
              <select id="select">
                <option value="">First Car</option>
                <option value="">Favorite Sport</option>
                <option value="">Favorite Food</option>
              </select>
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputAddress"
                placeholder="Select your favorite sport"
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

export default Register;
