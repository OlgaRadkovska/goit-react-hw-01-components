import PropTypes from 'prop-types';
import { StyledLayout } from './Layout.styled';

const Layout = ({ title = '', children }) => (
  // <section className="Layout">
  //   {title && <h2 className="title">{title}</h2>}
  //   {children}
  // </section>
  <StyledLayout>
    {title && <h2 className="title">{title}</h2>}
    {children}
  </StyledLayout>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
