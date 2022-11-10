import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';

import { Container } from './styles';

export const Admin = () => {
  return (
    <Container>
      <Header />
      <Logo />
      <h1>Admin</h1>
    </Container>
  );
};
