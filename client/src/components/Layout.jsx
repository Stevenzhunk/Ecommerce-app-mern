import Footer from './Footer';
import Header from './Header';
/*eslint-disable*/
const Layout = ({ children }) => {
  /* eslint-enable */
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
