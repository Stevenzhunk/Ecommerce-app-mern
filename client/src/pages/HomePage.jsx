import Layout from '../components/Layout';
import { useAuth } from '../context/auth.jsx';
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={'Best offers '}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      {console.log(auth)}
    </Layout>
  );
};

export default HomePage;
