import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Header, StyledNavLink, Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>

      <Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;