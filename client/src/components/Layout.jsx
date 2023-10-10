import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';
/*eslint-disable*/
const Layout = ({ children, description, keywords, author, title }) => {
  /* eslint-enable */
  return (
    <>
      <Helmet>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
      </Helmet>
      <Header />
      <main style={{ minHeight: '70vh' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
