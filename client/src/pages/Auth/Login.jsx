import Layout from '../../components/Layout';

const Login = () => {
  return (
    <div>
      <Layout title="Register now">
        <div className="register">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
              />
              {/*eslint-disable*/}
              <div id="emailHelp" className="form-text">
                We'll never share your data with anyone else.
              </div>
              {/*eslint-enable*/}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
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

export default Login;
